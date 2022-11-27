import React from "react";
import classesPosts from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {state} from '../../Redux/State'

export const MyPosts = () => {


    let postsElements = state.profilePage.posts.map(post => <Post message={post.message} likeCounts = {post.likeCounts} id = {post.id}/>)

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