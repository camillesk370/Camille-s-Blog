import React, { useState } from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Blog(props) {
    const [click, setClick] = useState(false);

    function handleClick() {
        setClick(prevValue => {
            return !prevValue;
        });
    }

    return <div className="blog">
        <h1>{props.title}</h1>
        <p>{ click ? props.content : props.content.substring(0, 454) }
        { (props.content.length > 454 && !click) && " ..." }
        { props.content.length > 454 && 
        <span className="read-more" onClick={handleClick} >
        { click ? "    Read Less" : "  Read More" }
        </span>}
        </p>
        <span className="submitTime">{props.time}</span>
        <button className="delete-btn" onClick={() => props.onDelete(props.id)}>
        <DeleteOutlineIcon />
        </button>
    </div>
}

export default Blog;