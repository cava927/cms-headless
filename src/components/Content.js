import React from 'react';
import GeneralContent from "./GeneralContent";
import GeneralEvent from "./GeneralEvent";
import GeneralComponent from "./GeneralComponent";

function getComponent(type) {
    switch (type){
        case 'webPageContent':
             return GeneralContent;
        case 'SimpleWidget':
            return GeneralComponent;
        case 'calendarEvent':
            return GeneralEvent;
        default:
            return GeneralContent
    }
}

const Content = (props) => {
    const Component = getComponent(props.contentType);
    return <Component {...props}/>
};
export default Content;
