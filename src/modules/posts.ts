//action type
const ADD_POST = 'posts/ADD_POST' as const;
const DELETE_POST = 'posts/DELETE_POST' as const;
const GET_POST = 'posts/GET_POST' as const;
const MODIFY_POST = 'posts/MODIFY_POST' as const;

//action 생성함수
let nextId = 1;
export const addPost = (user: string, title: string, desc: string) => ({
    type: ADD_POST,
    post: {
        id: nextId++,
        user,
        title,
        desc,
    },
});

export const deletePost = (id: number) => ({
    type: DELETE_POST,
    post: id,
});

export const getPost = (id: number) => ({
    type: GET_POST,
    post: id,
});

export const modifyPost = (post: Post) => ({
    type: MODIFY_POST,
    post: post,
});

//action 객체 타입
type PostsAction =
    | ReturnType<typeof addPost>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof getPost>
    | ReturnType<typeof modifyPost>;

export type Post = {
    id: number;
    user: string;
    title: string;
    desc: string;
};

type PostState = Post[];

const initialState: PostState = [];

export default function posts(
    state: PostState = initialState,
    action: PostsAction,
) {
    switch (action.type) {
        case ADD_POST:
            return state.concat({
                id: action.post.id,
                user: action.post.user,
                title: action.post.title,
                desc: action.post.desc,
            });
        case GET_POST:
            return state.filter((post) => post.id === action.post);
        case MODIFY_POST:
            return (
                // state.map((post) => {
                //     // const idx = state.indexOf(post.id === action.post.id);
                // })
                // state.indexOf(post.id === action.post.id);
            );
        default:
            return state;
    }
}
