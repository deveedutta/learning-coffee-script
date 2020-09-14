import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxLogger from "redux-logger";
import ReduxThunk from "redux-thunk";
import axios from 'axios';


const reducer1 = (state={}, action) => {}
const reducer2 = (state={}, action) => {}

const reducers = combineReducers({ reducer1: reducer1, reducer2: reducer2 });
const middleware = applyMiddleware(ReduxThunk, ReduxLogger);
const store = createStore(reducers, middleware);


store.dispatch((dispatch) => {
    dispatch({ type: "POSTS", payload: [] });
    axios.get(`https:\/\/jsonplaceholder.typicode.com/post/1`)
    .then((response) => {
        console.log("response", response);
        dispatch({type: "POSTS_LOADED", payload: response});
    })
    .catch((err) => {
        dispatch({type: "ERROR"});
    });
})

export default store;