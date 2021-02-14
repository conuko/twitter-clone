import { combineReducers } from 'redux';
import authedUser from './authedUser';
import signInOut from './signInOut';
import users from './users';
import tweets from './tweets';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
    authedUser,
    signInOut,
    users,
    tweets,
    loadingBar: loadingBarReducer
});