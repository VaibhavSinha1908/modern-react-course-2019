import jsonPlaceholder from "../../apis/jsonPlaceholder";

///Concept: Bad Approach: everything written here gets transpiled into
//ES2015 syntax by Babel and with the transpiled code we
//return two return statements.
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response });
};
