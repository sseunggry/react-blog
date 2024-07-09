import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../modules";
import {DeletePost} from "../modules/posts";
import PostList from "../components/PostList";

const PostContainer = () => {
    const posts = useSelector((state: RootState) => state.posts);
    const dispatch = useDispatch();
    
    const onDeletePost = (id: number) => {
        dispatch(DeletePost(id));
    };
    
    return (
        <PostList
            posts={posts}
            onDeletePost={onDeletePost}
        />
    )
}

export default PostContainer;