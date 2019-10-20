import React, { Component } from 'react';

export default class GeneralComponent extends Component {
    constructor() {
        super();
        this.state = {
            html: ''
        };
    }
    componentDidMount() {
        fetch(`https://demo.dotcms.com/api/widget/id/${this.props.identifier}`)
            .then(response => response.text())
            .then(html => {
                this.setState({
                    html: html
                });
            });
    }
    render() {
        return <div dangerouslySetInnerHTML={{ __html: this.state.html }} />;
    }
}
