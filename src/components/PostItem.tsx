import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../modules/posts';

type PostItemProps = {
    post?: Post;
    onGetPost?: (id: number) => void;
    onDeletePost?: (id: number) => void;
};

const PostItem = ({ post, onGetPost, onDeletePost }: PostItemProps) => {
    return (
        <>
            {/* <Link to={`edit/${post?.id}`} > */}
            <div className="info">
                <span className="user">{post?.user}</span>
            </div>
            <p className="title">{post?.title}</p>
            <p className="desc">{post?.desc}</p>
            {/* </Link> */}
        </>
    );
};

export default PostItem;
