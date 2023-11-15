import React, { useState } from "react";
import axios from "axios";

export default function Posts(){
    const [posts,setPosts] =useState([]);
    async function fetchposts(){
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((result)=> setPosts(result.data)) 
        .catch((e)=>console.error(e));

    }
    return(
        <div>
            
            <button onClick={fetchposts}
            className="bg-green-600 p-3 rounded-md m-5">Get all posts</button>
            {/* {JSON.stringify(posts)} */}
            {posts.map(function (posts){
                return <div key={posts}>
                    <div>
                        <span>{posts?.id}  </span>
                        {posts?.title}
                    </div>
                </div>
            })}
        </div>
    )
}