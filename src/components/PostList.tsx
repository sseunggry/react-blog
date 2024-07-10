import { Post } from 'modules/posts';
import React from 'react';
import { Link } from 'react-router-dom';
type PostListProps = {
    posts: Post[];
    onDeletePost: (id: number) => void;
};

type PostItemProps = {
    post: Post;
    onDeletePost: (id: number) => void;
};

const PostItem = ({ post, onDeletePost }: PostItemProps) => {
    return (
        <li>
            <Link to={`edit/${post.id}`}>
                <div className="info">
                    <span className="user">{post.user}</span>
                </div>
                <p className="title">{post.title}</p>
                <p className="desc">{post.desc}</p>
            </Link>
        </li>
    );
};

const PostListItem = ({ posts, onDeletePost }: PostListProps) => {
    return (
        <ul>
            {posts.map((post) => (
                <PostItem
                    key={post.id}
                    post={post}
                    onDeletePost={onDeletePost}
                />
            ))}
        </ul>
    );
};

const PostList = ({ posts, onDeletePost }: PostListProps) => {
    return (
        <>
            <ul className="tab">
                <li>tab1</li>
                <li>tab2</li>
                <li>tab3</li>
            </ul>
            <PostListItem posts={posts} onDeletePost={onDeletePost} />
        </>
    );
};

export default PostList;
