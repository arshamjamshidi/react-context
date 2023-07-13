import { createContext, useContext } from "react";
import {
  CLEAR_USERS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./actionTypes";
import {
  fetchUsersFailure,
  fetchUsersRequest,
  fetchUsersSuccess,
} from "./actions";
import { useReducerAsync } from "use-reducer-async";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };

    case FETCH_USERS_SUCCESS:
      return { loading: false, users: action.payload, error: "" };

    case FETCH_USERS_FAILURE:
      return { loading: false, users: [], error: action.payload };

    case CLEAR_USERS:
      return { loading: false, users: [], error: "" };

    default:
      return { ...state };
  }
};

const asyncActionHandlers = {
  FETCH_USERS:
    ({ dispatch }) =>
    (action) => {
      dispatch(fetchUsersRequest());

      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => dispatch(fetchUsersSuccess(data)))
        .catch((err) => dispatch(fetchUsersFailure(err.message)));
    },
};

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [users, dispatch] = useReducerAsync(
    reducer,
    initialState,
    asyncActionHandlers
  );

  return (
    <UsersContext.Provider value={{ users, dispatch }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;

export const useUsers = () => useContext(UsersContext);
