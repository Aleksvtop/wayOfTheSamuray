import React from "react";
import classesPosts from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {addPost, state} from '../../Redux/State'

export const MyPosts = () => {


    let postsElements = state.profilePage.posts.map(post => <Post message={post.message} likeCounts = {post.likeCounts} id = {post.id}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPostHandler = () => {
        debugger
            if(newPostElement.current) {
                addPost(newPostElement.current.value)
            }
    }
    return (
        <div className={classesPosts.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>
            <div className={classesPosts.posts}>
                {postsElements}
            </div>
        </div>
    );
}