import React from 'react'
import ComponentGrid from './ComponentGrid'
import Navigation from './NavigationComponent'

const PageGrid = (props) => {
    const {layout, bodyContents, headerContents, footerContents, category, sidebarContents } = props;
    return (
        <>
            { !!layout && layout.hasHeader ?
                <ComponentGrid component = {layout.header} contents={headerContents}/>:null
            }
            {/* { !!layout && layout.hasSidebar ?
                // <ComponentGrid component = {layout.sidebar} contents = {sidebarContents}/>:null
                <Navigation items = {sidebarContents}/>:null
            } */}
            { !!layout ?
                <ComponentGrid component = {layout.body} contents={bodyContents} category />:null
            }
            { !!layout && layout.hasFooter ?
                <ComponentGrid component = {layout.footer} contents={footerContents}/>:null
            }
        </>
        );
    };
export default PageGrid;