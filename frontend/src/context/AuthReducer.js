const AuthReducer = (state, action) => {
    switch(action.type) {
        case "LOGIN_START":
            return {
                user:null,
                isfetching: true,
                error: false,
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isfetching: true,
                error: false

            }
        case "LOGIN_FAILURE":
            return {
                user: null,
                isfetching: true,
                error: action.payload

            }
        default:
            return state;
    }
}

export default AuthReducer;