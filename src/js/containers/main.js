import React, { Component } from "react";
import ReactDOM from "react-dom";

class Main extends Component {
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
            <div className="grid-wrapper">
                <div className="grid-cell grid-cell-one">Your posts</div>
                <div className="grid-cell grid-cell-two">Your photos</div>
                <div className="grid-cell grid-cell-three">Your repos</div>
                <div className="grid-cell grid-cell-four">Upcoming events</div>
                <div className="grid-cell grid-cell-five">Todo</div>
                <div className="grid-cell grid-cell-six">Birtdays and wishlists</div>
                <div className="grid-cell grid-cell-seven">Wallet</div>
                <div className="grid-cell grid-cell-eight grid-cell-highlighted">What are you looking for today?</div>
            </div>
        );
    }
}
export default Main;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<Main />, wrapper) : false;