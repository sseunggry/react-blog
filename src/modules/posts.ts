//action type
const ADD_POST = 'posts/ADD_POST' as const;
const DELETE_POST = 'posts/DELETE_POST' as const;

//action 생성함수
let nextId = 1;
export const addPost = (name: string, title: string, desc: string) => ({
    type: ADD_POST,
    post: {
        id: nextId++,
        name,
        title,
        desc,
    },
});

export const DeletePost = (id: number) => ({
    type: DELETE_POST,
    post: id,
});

//action 객체 타입
type PostsAction = ReturnType<typeof addPost> | ReturnType<typeof DeletePost>;

export type Post = {
    id: number;
    name: string;
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
                name: action.post.name,
                title: action.post.title,
                desc: action.post.desc,
            });
        default:
            return state;
    }
}
