import EditForm from 'components/EditForm';
import { RootState } from 'modules';
import { addPost } from 'modules/posts';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

const ModifyContainer = () => {
    const params = useParams();
    const posts = useSelector((state: RootState) => state.posts);
    const dispatch = useDispatch();

    const post = posts.filter((post) => post.id === Number(params.id));
    const onAddPost = (user: string, title: string, desc: string) => {
        dispatch(addPost(user, title, desc));
    };

    return <EditForm post={post[0]} onAddPost={onAddPost} />;
};

export default ModifyContainer;
