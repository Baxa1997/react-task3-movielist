export const movieId = (value) => {
    return {
        type:'MOVIES_ID',
        payload: value
    }
}

export const movieList = (value) => {
    return {
        type: 'MOVIE_LIST',
        payload: value
    }
}
export const comment = (value) => {
    return {
        type: 'COMMENT',
        payload: value
    }
}