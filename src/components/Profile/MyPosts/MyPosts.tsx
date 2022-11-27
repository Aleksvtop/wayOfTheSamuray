import React from "react";
import classesPosts from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    let postData = [
        {id: 1, message: 'Hi, how are you?', likeCounts: '5'},
        {id: 2, message: 'My first post', likeCounts: '8'}
    ]

    let postsElements = postData.map(post => <Post message={post.message} likeCounts = {post.likeCounts} id = {post.id}/>)

    return (
        <div className={classesPosts.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classesPosts.posts}>
                {postsElements}
            </div>
        </div>
    );
}