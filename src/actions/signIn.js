export const SIGN_IN = 'SIGN_IN';

export const signIn = (payload) => (dispatch) => {
	dispatch({
        type: SIGN_IN, 
        payload 
    });
	history.push('/');
};