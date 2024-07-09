import { Post } from 'modules/posts';
import React from 'react';

interface postsType {
    id?: string;
    name?: string;
    title?: string;
    desc?: string;
}

type PostListProps = {
    posts: Post[];
    onAddPost: (post: postsType) => void;
    onDeletePost: (id: number) => void;
};

type PostItemProps = {
    post: Post;
    onAddPost: (post: postsType) => void;
    onDeletePost: (id: number) => void;
};

const PostItem = ({ post, onDeletePost }: PostItemProps) => {
    return (
        <li>
            <p className="title">{post.title}</p>
            <p className="desc">{post.desc}</p>
        </li>
    );
};

const PostListItem = ({ posts, onAddPost, onDeletePost }: PostListProps) => {
    return (
        <ul>
            {posts.map((post) => (
                <PostItem
                    key={post.id}
                    title={post.title}
                    desc={post.desc}
                    onDeletePost={onDeletePost}
                />
            ))}
        </ul>
    );
};

const PostList = ({ posts, onAddPost, onDeletePost }: PostListProps) => {
    return (
        <>
            <ul className="tab">
                <li>tab1</li>
                <li>tab2</li>
                <li>tab3</li>
            </ul>
            <ul>
                <PostListItem
                    posts={posts}
                    onAddPost={onAddPost}
                    onDeletePost={onDeletePost}
                />
            </ul>
        </>
    );
};

export default PostList;
