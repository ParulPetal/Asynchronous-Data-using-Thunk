import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from '../REDUX/Types';
const initial_state = {
    posts: [],
    loading: false,
    error: ""
}


export const reducer = (state = initial_state, action) => {
    switch (action.type) {
        case FETCH_POST_REQUEST:
            return {
                ...state,
                loading: true,
           
            }
        case FETCH_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload,
                error: ''
            }

        case FETCH_POST_FAILURE:
            return {
                loading: false,
                posts: [],
                error: action.payload

            }

        default: return state

    }

}