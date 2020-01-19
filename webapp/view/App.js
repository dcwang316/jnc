import React, { Component } from 'react';
import HomePage from 'homepage/HomePage';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.history.listen(() => {
            document.documentElement.scrollTop = document.body.scrollTop = 0;
        })
    }
    render() {
        return (
            <div>
                <HomePage />
            </div>
        )
    }
}