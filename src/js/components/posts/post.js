import React from "react";
import PropTypes from "prop-types";
const Post = ({ title, date, text, id, handleChange }) => (
    <div className="post">
        <h2>{title}</h2>
        <div className='post-body'>{text}</div>
        <div>{date}</div>
    </div>
);
Post.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};
export default Post;