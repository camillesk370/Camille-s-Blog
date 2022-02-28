import React, { useState } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Blog from "./Blog";

function App() {
    const [blogs, setBlogs] = useState([]);
    function addBlog(blog) {
        setBlogs(prevBlogs => {
            return [...prevBlogs, blog];
        });
    }

    function deleteNote(id) {
        setBlogs(prevBlogs => {
            return prevBlogs.filter((blog, index) => index !== id);
        })
    }

    return <div>
      <Header />
      <CreateArea onAdd={addBlog}/>
      {blogs.map((blog, i) => (
        <Blog 
        key={i} 
        id={i} 
        title={blog.title} 
        content={blog.content} 
        onDelete={deleteNote}
        time={blog.time}
        />
      ))}
    </div>
}

export default App;