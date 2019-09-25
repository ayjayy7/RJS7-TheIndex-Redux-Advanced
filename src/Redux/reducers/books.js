import * as actionTypes from "../actions/actionTypes";

intialState = {
  books: [],
  filteredBooks: []
};

const BooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BOOKS:
      return {
        ...state,
        books: action.payload,
        filteredBooks: action.payload
      };
    case actionTypes.FILTER_BOOKS:
      return {
        ...state,
        filteredBooks: state.books.filter(book => {
          return `${book.title}`
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        })
      };
    default:
      return state;
  }
};

export default BooksReducer;
