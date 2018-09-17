import "../../styles/components/header.scss";
import logoImage from '../../images/logo.png';

import React, { Component } from "react";
import ReactDOM from "react-dom";

class Header extends Component {
    constructor() {
        super();
        this.state = {
            seo_title: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    render() {
        const { seo_title } = this.state;
        return (
            <div className="header">
                <div className="container logo-area">
                    <a className="logo"><img src={logoImage} /></a>
                    <h1>EasyBlog</h1>
                </div>
                <div className="navigation">
                    <ul className="container">
                        <li>
                            <a href='#/main'> Main </a>
                        </li>
                        <li>
                            <a href = '#/news'> News </a>
                        </li>
                        <li>
                            <a href = '#/login'> Logout </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Header;

const wrapper = document.getElementById("app-footer");
wrapper ? ReactDOM.render(<Header />, wrapper) : false;
