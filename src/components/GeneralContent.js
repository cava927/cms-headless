import React from 'react';
const GeneralContent = (props) => {
    return <div dangerouslySetInnerHTML={{__html: props.body}} />;
};
export default GeneralContent;
