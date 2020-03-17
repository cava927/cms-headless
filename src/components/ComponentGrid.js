import React from 'react'
import ContainerGrid from './ContainerGrid'
import {sortByPriority} from '../utils/utils'
import {getFullContainers} from '../utils/utils'

const ComponentGrid = props => {
    let {component, contents} = props;
    let fullContainers = getFullContainers(component.containers, contents);
    return (
        <>
        {!!component  ?
            <div className={component.class}>
            {sortByPriority(fullContainers).map((container,index)=>{
                return <ContainerGrid container = {container} key={index}/>
            }) }    
            </div> : null
        }
        </>
    )
};

export  default  ComponentGrid;