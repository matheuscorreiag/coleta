import api from "../../services/api";
import { addItems, addItem } from "../ducks/items";

export const getAllItems = (search) => {
  return (dispatch) => {
    api
      .get(`items?search=${search}`)
      .then((res) => {
        console.log(res.data);
        dispatch(addItems(res.data));
      })
      .catch(console.log);
  };
};

export const addItemFetch = (item) => {
  return (dispatch) => {
    api.post("/items", item).then((res) => dispatch(addItem(res.data)));
  };
};
