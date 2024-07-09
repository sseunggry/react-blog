import React, {ReactHTML, useState} from 'react';
import {Post} from "modules/posts";
import {useNavigate} from "react-router-dom";

type EditProps = {
    posts: Post[];
    onAddPost: (name: string, title: string, desc: string) => void;
}

const EditForm = ({ posts, onAddPost }: EditProps) => {
    const [user, setUser] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const navigate = useNavigate();
    
    const onChange = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        
        if(name === "user"){
            setUser(value);
            
            if(!value) {
                console.log(123);
            }
        }
        if(name === "title"){
            setTitle(value);
        }
        if(name === "desc"){
            setDesc(value);
        }
    };
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onAddPost(user, title, desc);
        navigate('/');
    };
    
    return (
        <form onSubmit={onSubmit}>
            <div className="input-box">
                <label htmlFor="user">이름</label>
                <input type="text" id="user" name="user" onChange={onChange} value={user} required={true}/>
                <p className="error-message">* 이름을 입력해주세요.</p>
            </div>
            <div className="input-box">
                <label htmlFor="title">제목</label>
                <input type="text" id="title" name="title" onChange={onChange} value={title} required={true}/>
            </div>
            <div className="input-box">
                <label htmlFor="desc">내용</label>
                <textarea id="desc" name="desc" onChange={onChange} value={desc} required={true}>
                    {desc}
                </textarea>
            </div>
            
            <button type="submit" className="btn btn-page">등록</button>
        </form>
    )
}

export default EditForm;