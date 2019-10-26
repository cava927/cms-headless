import React from 'react';
import { Row as LayoutRow } from 'reactstrap';
import Column from './Column'

const Row = (props) => {
    const { columns } = props;
    return <LayoutRow>
        {columns.map((column, index) =>
            <Column {...column} key={index} />
        )}
            </LayoutRow>
};
export default Row;
