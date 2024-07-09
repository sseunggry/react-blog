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
    let post;
    
    useEffect(() => {
        post = onGetPost(Number(params.id));
        console.log(post, Number(params.id));
    }, [params.id]);
    
    // const post = posts.filter(post => (post.id == params.id as number | ''));
    
    // console.log(posts, onGetPost, post);
    // console.log(posts, posts.filter(post => { post.id === params.id as number | undefined}), params.id);
    
    return (
        <PostItem
            // post={post}
            onGetPost={onGetPost}
        />
    );
};

export default DetailContainer;