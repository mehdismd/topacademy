import React, { Component } from "react";


export default class Blogpost extends Component {
    constructor(props) {

        super(props);

    }
    render() {
        return (
            <div>
                Post:{this.props.blok.title}</div>
        );
    }
}
