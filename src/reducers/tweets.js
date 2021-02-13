import { RECEIVE_TWEETS, TOGGLE_TWEET } from '../actions/tweets';

export default function tweets (state = {}, action) {
    switch(action.type) {
        case RECEIVE_TWEETS :
            return {
                ...state,
                ...action.tweets,
            }
        case TOGGLE_TWEET :
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    likes: action.hasLiked === true
                        // filter out the authenticated user if they have already like the tweet:
                        ? state[action.id].likes.filter((uid) => uid !== action.authedUser)
                        // if they haven't liked the tweet, we add the user name of the authenticated user to the likes array:
                        : state[action.id].likes.concat([action.authedUser])
                }

            }
        default :
            return state
    }
}