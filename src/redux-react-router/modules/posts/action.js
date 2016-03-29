import blogAPI from './services/blog-api';

export const FETCH_POST = "FETCH_POST";

export function getAllPosts() {
    return {
        type: FETCH_POST,
        payload: blogAPI.getAllPosts()
    }
}