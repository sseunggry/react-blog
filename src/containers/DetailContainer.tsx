import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../modules";
import {GetPost, Post} from "../modules/posts";
import PostItem from "../components/PostItem";

const DetailContainer =  () => {
    const params = useParams();
    const posts = useSelector((state: RootState) => state.posts);
    const dispatch = useDispatch();
    
    const onGetPost = (id: number) => {
        dispatch(GetPost(id));
    };
    
    const post = posts.filter((post) => post.id === Number(params.id));
    
    return (
        <PostItem
            post={post[0]}
            onGetPost={onGetPost}
        />
    );
};

export default DetailContainer;