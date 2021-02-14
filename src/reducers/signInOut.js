import { SIGN_IN } from "../actions/signIn";
import { SIGN_OUT } from "../actions/signOut";

const initialState = {
	isLoggedIn: false,
	data: {
		id: null,
		email: null,
	},
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case SIGN_IN:
			return { ...state, isLoggedIn: true, data: payload };
		case SIGN_OUT:
			return {
				...state,
				isLoggedIn: false,
				data: { id: null, email: null },
			};
		default:
	}
	return state;
};