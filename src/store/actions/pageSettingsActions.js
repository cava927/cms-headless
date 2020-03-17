
import * as actionTypes from './actionTypes';
import {createContentMap} from '../../utils/utils';

export const setPageSettings = paramPage => {

    return dispatch => {   
        dispatch(request());
        let url = `http://localhost:1337/pages/${paramPage}`;
        fetch(url, {})
          .then(data => data.json())
          .then(page => {
            dispatch(success(page));
            dispatch(
                getLayout(
                    page.layout.id, 
                    page.bodycontents.id, 
                    page.headercontents.length >0 ? page.headercontents[0].id : '', 
                    page.footercontents.length>0 ?page.footercontents[0].id :'' ));
            // dispatch(getContent(coursesMap));
        });
    }

    function request () {
        return {
            type: actionTypes.SET_PAGE_LAYOUT_REQUEST        
        };
    }

    function success (page) {
        return {
            type: actionTypes.SET_PAGE_LAYOUT_SUCCESS,
            page,
        };
    }

    function failure () {
        return {
            type: actionTypes.SET_PAGE_LAYOUT_FAILURE           
        };
    }
};


export const getLayout = (layoutId, contentId, headerContents, footerContents) => {
    return dispatch => {
        const urlsToReq = [];
        let urlLayout = 'http://localhost:1337/layouts/' + layoutId;
        urlsToReq.push(urlLayout);
        let bodycontents = 'http://localhost:1337/bodycontents/' + contentId;
        urlsToReq.push(bodycontents);
        /*non sempre ci sono header e footer */
        let urlHeaderContent = 'http://localhost:1337/headercontents/' + headerContents;
        let urlFooterContent = 'http://localhost:1337/footercontents/' + footerContents;
        if(headerContents){
            urlsToReq.push(urlHeaderContent);
        };
        if (footerContents){
            urlsToReq.push(urlFooterContent);
        }

        const fetchAllInfo = async (urls) => {
            const requests = urls.map((url) => {
              return fetch(url) // Async function that fetches the user info.
               .then((data) => {
                return data.json() // Returns the user info.
                })
            })
            return Promise.all(requests) // Waiting for all the requests to get resolved.
          }
        fetchAllInfo(urlsToReq)
        .then((dataComplete) => {
            const layout = dataComplete[0];
            const bodyContentsMap = {};
            const bodyContents =  createContentMap(bodyContentsMap, dataComplete[1].contents);
            const headerContentsMap = {};
            const footerContentsMap = {};
            let headerContents = null;
            if(dataComplete[2]) {
                headerContents =  createContentMap(headerContentsMap, dataComplete[2].contents);
            }
            if (dataComplete[3]){
                footerContents =  createContentMap(footerContentsMap, dataComplete[3].contents);
            }
            dispatch(success(layout, bodyContents, headerContents, footerContents ));
        }) 
      }   
    
    function success (layout, bodyContents, headerContents,footerContents) {
        return {
            type: actionTypes.SET_LAYOUT_SUCCESS,
            layout,
            bodyContents,
            headerContents,
            footerContents
        };
    } 
}