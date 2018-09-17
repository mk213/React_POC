import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";

class FormContainer extends Component {
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
        const { input_content } = this.state;
        return (
            <form id="article-form">
            <Input
                text="Test text"
                label="test_label"
                type="text"
                id="test_id"
                value={input_content}
                handleChange={this.handleChange}
            />
            </form>
        );
    }
}
export default FormContainer;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;