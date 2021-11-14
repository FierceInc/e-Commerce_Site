/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Body from './body';
import "./index.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };

    }

    render() {
        return (
            <>
            <Header />
            </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"))