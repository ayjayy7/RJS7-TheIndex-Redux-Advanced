import { FETCH_BOOKS } from "./actionTypes";
import axios from "axios";

export const fetchAllBooks = async () => {
  return async dispatch => {
    try {
      const res = await axios.get("/api/books/");
      const books = res.data;
      dispatch({
        type: FETCH_BOOKS,
        payload: books
      });
    } catch (err) {
      console.error(err);
    }
  };
};
