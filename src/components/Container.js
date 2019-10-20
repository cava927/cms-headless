import React from 'react';
import Content from './Content';

const Container = (props) => {
    return props.contentlets.map((contentlet, i) =>
        <Content key={i} {...contentlet} />);
};

export default Container;
