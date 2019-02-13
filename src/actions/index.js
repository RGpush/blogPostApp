import _ from 'lodash';
import axios from '../apis/jsonPlaceHolder';

export const fetchPosts = () => async dispatch => {
        const response = await axios.get('/posts');

        dispatch({
            type: 'FETCH_POST',
            payload: response.data
        })
 };

// to just make sure same function should not called over again with same Id we are doing memoization
export const fetchUser = id => dispatch => {
    _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await axios.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
});