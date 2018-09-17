//import App from "./containers/App";
//import "../styles/styles.scss";
import "../styles/styles.scss";
import React, { Component } from "react";
import ReactDOM from "react-dom"; // glue for easy rendering in DOM

import Header from "./components/header";

import Main from "./containers/main";
import News from "./containers/news";
import Login from "./containers/login";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: window.location.hash.substr(1)
        };
    }
    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({route: window.location.hash.substr(1)});
        });
    }
    render() {
        let Content;

        switch (this.state.route) {
            case '/login':
                Content = Login;
                break;
            case '/main':
                Content = Main;
                break;
            case '/news':
                Content = News;
                break;
            default:
                Content = Main;
        }

        return (
            <div>
                <Header/>
                <div className="container">
                    <Content/>
                </div>
            </div>
        )
    }
}

const wrapper = document.getElementById("myApp");
wrapper ? ReactDOM.render(<App/>, wrapper) : false;