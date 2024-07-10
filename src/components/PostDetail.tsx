import React from 'react';
import { Post } from 'modules/posts';
import { Link } from 'react-router-dom';

type PostItemProps = {
    post?: Post;
    onGetPost?: (id: number) => void;
    onDeletePost?: (id: number) => void;
};

const PostDetail = ({ post, onGetPost, onDeletePost }: PostItemProps) => {
    return (
        <>
            <div className="detail-info">
                <p className="user">{post?.user}</p>
                <p className="title">{post?.title}</p>

                <div className="btn-box">
                    <Link to={`/modify/${post?.id}`} className="btn-text">
                        수정
                    </Link>
                    <Link to="" className="btn-text">
                        삭제
                    </Link>
                </div>
            </div>
            <div className="detail-con">
                <p className="desc">{post?.desc}</p>
            </div>
            <div className="comment-box">
                <form className="input-box">
                    <label htmlFor="comment">댓글 입력</label>
                    <textarea id="comment"></textarea>
                    <button type="submit" className="btn btn-m btn-black">
                        등록
                    </button>
                </form>
                <ul className="comment-list">
                    <li>
                        <div className="user-info">
                            <span className="user">씅그리</span>
                            <span className="date">0000.00.00</span>
                        </div>
                        <p className="comment">!!!</p>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default PostDetail;
