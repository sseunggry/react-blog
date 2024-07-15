import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="inner">
                <h1 className="logo">
                    <Link to="/">blog.</Link>
                </h1>
                <div className="menu">
                    <nav>
                        <Link to="/edit">글쓰기</Link>
                        {/* <Link to="/modify">수정하기</Link> */}
                        <Link to="">마이페이지</Link>
                    </nav>
                    <div className="btn-util">
                        <Link to="">로그인</Link>
                        <Link to="">회원가입</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
