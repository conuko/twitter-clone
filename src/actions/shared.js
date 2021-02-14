import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receiveTweets } from './tweets';
import { setAuthedUser } from './authedUser';
import { showLoading, hideLoading} from 'react-redux-loading';

// TODO: create function to get the AUTHED_ID from the logged-in user instead of this fixed ID
const AUTHED_ID = 'tylermcginnis';

export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({ users, tweets }) => {
                dispatch(receiveUsers(users));
                dispatch(receiveTweets(tweets));
                dispatch(setAuthedUser(AUTHED_ID));
                dispatch(hideLoading());
            })
    }
}