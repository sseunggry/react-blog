import React, { useEffect, useState } from 'react';
import { Post } from 'modules/posts';
import { useNavigate, useParams } from 'react-router-dom';

type EditProps = {
    post?: Post;
    onAddPost: (user: string, title: string, desc: string) => void;
    onModifyPost?: (post: Post) => void;
};

const EditForm = ({ post, onAddPost, onModifyPost }: EditProps) => {
    const [user, setUser] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const navigate = useNavigate();
    const params = useParams();

    const onChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;

        if (name === 'user') {
            setUser(value);

            if (!value) {
                // console.log(123);
            }
        }
        if (name === 'title') {
            setTitle(value);
        }
        if (name === 'desc') {
            setDesc(value);
        }
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (params.id && post && onModifyPost) {
            onModifyPost({
                id: post.id,
                user: user,
                title: title,
                desc: desc,
            });
        } else {
            onAddPost(user, title, desc);
        }
        navigate('/');
    };

    useEffect(() => {
        if (params.id && post) {
            setUser(post.user);
            setTitle(post.title);
            setDesc(post.desc);
        }
    }, [post]);

    return (
        <form onSubmit={onSubmit}>
            <div className="input-box">
                <label htmlFor="user">이름</label>
                <input
                    type="text"
                    id="user"
                    name="user"
                    onChange={onChange}
                    value={user}
                    required={true}
                />
                <p className="error-message">* 이름을 입력해주세요.</p>
            </div>
            <div className="input-box">
                <label htmlFor="title">제목</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={onChange}
                    value={title}
                    required={true}
                />
            </div>
            <div className="input-box">
                <label htmlFor="desc">내용</label>
                <textarea
                    id="desc"
                    name="desc"
                    onChange={onChange}
                    value={desc}
                    required={true}
                >
                    {desc}
                </textarea>
            </div>

            <button type="submit" className="btn btn-page">
                등록
            </button>
        </form>
    );
};

export default EditForm;
