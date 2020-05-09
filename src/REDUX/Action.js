import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from '../REDUX/Types';
import axios from 'axios';

export const loading = () => {
    return {
        type: FETCH_POST_REQUEST
    }
}

export const success = (posts) => {
    return {
        type: FETCH_POST_SUCCESS,
        payload:posts
    }
}

export const failure = (error) => {
    return {
        type: FETCH_POST_FAILURE,
        payload:error
    }
}


export const fectchngPosts = () => {
    return dispatch => {
        dispatch(loading)
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                console.log(res.data);
                const posts = res.data;
                dispatch(success(posts));
            }).catch(error => {
                console.log(error);
                const errorMsg = error.message;
                dispatch(failure(errorMsg))
            })
    }
}  
