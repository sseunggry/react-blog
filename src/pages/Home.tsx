import React from 'react';
import Wrapper from 'components/Wrapper';
import PostList from 'components/PostList';
import PostContainer from "../containers/PostContainer";

const Home = () => {
    return (
        <>
            <Wrapper>
                <PostContainer />
            </Wrapper>
        </>
    );
};

export default Home;
