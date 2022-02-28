import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [isExpanded, setExpand] = useState(false);
    const [blog, setBlog] = useState({title:"", content: "", time: new Date().toLocaleString().substring(0,15)});

    function expand() {
        setExpand(true);
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setBlog(prevValue => {
            return {
                ...prevValue,
                [name]: value,
                time: new Date().toLocaleString().substring(0,15)
            };
        });
    }

    function handleClick(event) {
        event.preventDefault();
        props.onAdd(blog);
        setBlog({title:"", content: "", time: new Date().toLocaleString().substring(0,15)});
    }

    return <div>
        <form>
            {isExpanded && <input 
            name="title" 
            value={blog.title}
            placeholder="Title" 
            onChange={handleChange}
            />}
            <textarea 
            onClick={expand} 
            name="content" 
            value={blog.content}
            placeholder="Write a new blog..." 
            onChange={handleChange} 
            rows={isExpanded ? 3: 1}
            />
            <Zoom in={isExpanded}>
              <button onClick={handleClick}>
              <AddIcon />
              </button>
            </Zoom>
        </form>
    </div>
}

export default CreateArea;