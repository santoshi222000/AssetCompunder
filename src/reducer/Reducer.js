let tokenIntitialState = {
    token: null,
}

export const tokenReducer = (state = tokenIntitialState, action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.payload,
            };
        case 'CLEAR_TOKEN':
            return {
                ...state,
                token: null,
            };

        default:
            return state;
    }
}