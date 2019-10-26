import React from 'react';
import { Col as LayoutCol } from 'reactstrap';
import Container from './Container';

const Column = props => {
    return <LayoutCol sm={props.width}>
                {props.containers.map((container, i) => (
                    <Container {...container} key={i}/>
                    ))}
            </LayoutCol>
};

export  default  Column;
