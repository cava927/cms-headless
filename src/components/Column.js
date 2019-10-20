import React from 'react';
import { Col as LayoutCol } from 'reactstrap';
import Container from './Container';

const Column = props => {
    return <LayoutCol sm={props.width}>
                {props.containers.map(container => (
                    <Container {...container} />
                    ))}
            </LayoutCol>
};

export  default  Column;
