import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import { POST_UPDATE, POST_CREATE, GET_ALL_POST_SUCCESS } from '../actions/types';

export const postUpdate = (prop, value) => {
    return {
        type: POST_UPDATE,
        payload: { prop, value }
    }
};

export const postCreate = (url, caption) => {
    const { currentUser } = firebase.auth();
    const email = currentUser.email;

    return (dispatch) => {
        firebase.database().ref(`/post`)
            .push({ email, url, caption })
            .then(() => {
                dispatch({ type: POST_CREATE });
            });
    };
};

export const getAllPost = () => {
    return (dispatch) => {
        firebase.database().ref(`/post`)
            .on('value', snapshot => {
                dispatch({
                    type: GET_ALL_POST_SUCCESS,
                    payload: snapshot.val()
                })
            })
    }
}
