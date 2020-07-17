export const setVisibility = current => {
    return {
        type: 'SET_VISIBILITY',
        payload: !current
    }
}
