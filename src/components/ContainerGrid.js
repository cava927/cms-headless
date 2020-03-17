import React from 'react'
import Content from './Content'

const ContainerGrid = props => {
    let {container} = props;
    return (
        <>
        {!!container  ? 
        <div className={container.styleClass +' ' + (container.position ? container.position : '')} >
            <Content content= {container.contentlets}/>
        </div> : null
        }
        </>
    )
};

export  default  ContainerGrid;