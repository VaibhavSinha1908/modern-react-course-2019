export default (state = [], action) => {  //state object is an array because in this app, the state will contain all the posts returned from our API.
    switch (action.type) {
        case 'FETCH_POSTS': return action.payload;
        default: return state;
    }
}