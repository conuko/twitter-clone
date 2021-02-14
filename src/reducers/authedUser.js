import { SET_AUTHED_USER } from '../actions/authedUser';
import { SIGN_OUT } from '../actions/signOut';

export default function authedUser (state = null, action) {
    switch(action.type) {
        case SET_AUTHED_USER :
            return action.id;
        case SIGN_OUT:
            return state = null;
        default :
            return state;
    }
}