export const SET_AUTHED_USER = 'SET_AUTHED_USER';

export function setAuthedUser (id) {
    return {
        type: SET_AUTHED_USER,
        id,
    }
}

// export const setViewedUser = (id) => async (dispatch) => {
// 	try {
// 		const userResponse = await baseURL.get(`/get-user-info/${id}`);
// 		const response = await baseURL.get(`/get-user-posts/${id}`);
// 		dispatch({ type: SET_VIEWED_USER, payload: userResponse.data });
// 		dispatch({ type: SET_FEED, payload: response.data });
// 	} catch (err) {
// 		dispatch({ type: TOGGLE_MODAL_ON });
// 	}
// };