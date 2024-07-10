import React from 'react';
import EditForm from '../components/EditForm';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { addPost } from '../modules/posts';

const EditContainer = () => {
    // const posts = useSelector((state: RootState) => state.posts);
    const dispatch = useDispatch();

    const onAddPost = (user: string, title: string, desc: string) => {
        dispatch(addPost(user, title, desc));
    };

    return <EditForm onAddPost={onAddPost} />;
};

export default EditContainer;
