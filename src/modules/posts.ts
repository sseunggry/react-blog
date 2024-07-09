//action type
const ADD_POST = 'posts/ADD_POST' as const;
const DELETE_POST = 'posts/DELETE_POST' as const;
const GET_POST = 'posts/GET_POST' as const;

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

export const DeletePost = (id: number) => ({
    type: DELETE_POST,
    post: id,
});

export const GetPost = (id: number) => ({
    type: GET_POST,
    id
    // post: id
});

//action 객체 타입
type PostsAction = ReturnType<typeof addPost> | ReturnType<typeof DeletePost> | ReturnType<typeof GetPost>;

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
            return state.filter((post) => post.id === action.id);
        default:
            return state;
    }
}
