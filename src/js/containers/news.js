import React, { Component } from "react";
import ReactDOM from "react-dom";
import Post from "../components/posts/Post";

class News extends Component {
    constructor() {
        super();
        this.state = {
            seo_title: ""
        };
        this.handleChange = (event) =>  {
            let change = {};
            change[event.target.id] = event.target.innerText;
            setState(change);
            console.log("MEOW" +
            event.target.innerText)

            function setState(change) {
                let newPost = (change[0] == 'targetId');
            };
        }
        //this.setState = function(change) {
        //    target.newPost = (change[0] == 'targetId');
        //};
    }
    render() {
        let posts = [
            {title: 'Second post', date:'29.04.2018', text: 'a short test note', id: 'jhguin'},
            {title:'First post', date: '28.04.2018', text: 'First note', id: 'jhgasusin'}
        ];
        const { seo_title } = this.state;
        return (
            <div>
                <div className="user-panel"></div>

                <form id="article-form">
                    <div className="form-control" id="newPost" contentEditable="true" onInput={this.handleChange}>
                    </div>

                </form>

                <div className="previousPosts">
                    {posts.map( (item) =>
                            <Post
                                title = {item.title}
                                date = {item.date}
                                text = {item.text}
                                id = {item.id}
                                handleChange={this.handleChange.bind(this)}
                                key = {item.id}
                            />
                    )}
                </div>
            </div>
        );
    }
}
export default News;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<News />, wrapper) : false;