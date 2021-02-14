import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from '../actions/tweets';

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
        case ADD_TWEET :
            const { tweet } = action;
            let replyingTo = {};

            // if the new added tweet is a reply to another tweet, we want to grab that new tweets,
            // spread all of the previous properties onto that new tweet, concatenate onto the replies array
            // the new reply that we just created and then we want to spread this whole object onto our tweets array,
            // so it will update this specific portion of our state:
            if (tweet.replyingTo !== null) {
                replyingTo = {
                    [tweet.replyingTo]: {
                        ...state[tweet.replyingTo],
                        replies: state[tweet.replyingTo].replies.concat([tweet.id])
                    }
                };
            };
            // when we add a new tweet, we take that tweet and add it to our tweets slice of our state
            return {
                ...state,
                [action.tweet.id]: action.tweet,
                ...replyingTo,
            };

        default :
            return state
    }
}