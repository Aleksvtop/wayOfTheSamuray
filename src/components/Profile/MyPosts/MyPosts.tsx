import React from "react";
import classesPosts from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
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
                <Post message={"Hi, how are you?"} likeCounts = {'5'}/>
                <Post message={"It's my first post"} likeCounts = {'8'}/>
            </div>
        </div>
    );
}