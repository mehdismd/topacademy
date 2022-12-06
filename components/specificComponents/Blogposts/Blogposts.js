import React, { Component } from "react";


export default class Blogposts extends Component {
    constructor(props) {

        super(props);

    }
    render() {
        return (
            <div>
                Blogposts:{this.props.blok.title}</div>
        );
    }
}
