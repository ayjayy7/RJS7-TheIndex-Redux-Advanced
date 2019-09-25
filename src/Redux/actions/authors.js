import { FETCH_AUTHORS } from "./actionTypes";
import axios from "axios";

export const fetchAllAuthors = async () => {
  return async dispatch => {
    try {
      const res = await axios.get("/api/authors/");
      const authors = res.data;
      dispatch({
        type: FETCH_AUTHORS,
        payload: authors
      });
    } catch (err) {
      console.error(err);
    }
  };
};
