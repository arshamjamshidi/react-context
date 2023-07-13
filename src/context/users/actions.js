import {
  CLEAR_USERS,
  FETCH_USERS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./actionTypes";

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (res) => ({
  type: FETCH_USERS_SUCCESS,
  payload: res,
});

export const fetchUsersFailure = (err) => ({
  type: FETCH_USERS_FAILURE,
  payload: err,
});

export const fetchUsers = () => ({
  type: FETCH_USERS,
});

export const clearUsers = () => ({
  type: CLEAR_USERS,
});
