import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { getPost } from '../modules/posts';
import PostDetail from 'components/PostDetail';

const DetailContainer = () => {
    const params = useParams();
    const navigate = useNavigate();
    const posts = useSelector((state: RootState) => state.posts);
    const dispatch = useDispatch();

    const onGetPost = (id: number) => {
        dispatch(getPost(id));
    };

    const post = posts.filter((post) => post.id === Number(params.id));
    useEffect(() => {
        if (!post.length) {
            navigate('/');
        }
    }, []);

    return <PostDetail post={post[0]} onGetPost={onGetPost} />;
};

export default DetailContainer;
