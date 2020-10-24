import api from "../../services/api";

import { addItems, addItem } from "../ducks/items";
import { login } from "../ducks/auth";
import { userBasic } from "../ducks/userType";

export const getAllItems = (search) => {
  return (dispatch) => {
    api
      .get(`items?search=${search}`)
      .then((res) => {
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

export const authFetch = () => (dispatch) => dispatch(login());

/* export const userType = () => (dispatch) => dispatch(userBasic()); */
