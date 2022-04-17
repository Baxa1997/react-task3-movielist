const initialState = {
    movieId: '1'
}

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MOVIES_ID':
            return {
                movieId: action.payload
            };
        default:
            return state;
    }
}

export default moviesReducer;