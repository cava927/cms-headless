import React from 'react';
import Row from './Row';
import {getUpdatedColumns} from "../utils/utils";
import  {Container as LayoutContainer} from "reactstrap"

const Page = props => {
    const { layout, containers } = props;
        return(
            <LayoutContainer>
                {layout ? layout.body.rows.map((row, index) => {
                const columns = getUpdatedColumns(row.columns, containers);
                return <Row key={row.identifier} columns={columns} />;
            })
                : null}
            </LayoutContainer>
        );
};

export default  Page;
