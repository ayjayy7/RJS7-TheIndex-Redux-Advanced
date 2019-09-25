import { FETCH_AUTHORS } from "./actionTypes";
const initialState = {
  authors: [],
  loading: true,
  loading2: true,
  author: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AUTHORS:
      const authors = action.payload;

      return {
        ...state,
        authors: authors,
        loading: false
      };
    case GFETCH_AUTHORS:
      const author = action.payload;

      return {
        ...state,
        author: author,
        loading1: false
      };
    case "SET_LOADING_TRUE":
      return {
        ...state,

        loading1: true
      };
    default:
      return state;
  }
};
