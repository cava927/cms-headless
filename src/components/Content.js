import React from 'react'
import {Text} from "./typeContent"
import {Media} from "./typeContent"
import {Card} from "./typeContent"

const Content = (props) => {
    let {content} = props;
    console.log(content);
    return (
        <>
        {!!content && content.type==='text'  ? 
            <Text content= {content}/>  : null
        }
        {!!content && content.type==='media'  ? 
            <Media content= {content}/>  : null
        }
        {!!content && content.type==='card'  ? 
            <Card content= {content}/>  : null
        }
        </>
    )
};
export default Content;
