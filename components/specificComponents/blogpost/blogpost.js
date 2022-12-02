

import React, { Component } from "react";

export default class blogpost extends Component {
    constructor(props) {

        super(props);

    }
    render() {
        return (
            <div>
                blogpost:{this.props.blok.title}</div>
        );
    }
}