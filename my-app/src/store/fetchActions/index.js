import api from "../../services/api";

import { addItems, addItem } from "../ducks/items";
import { addUsers } from "../ducks/users";
import { login } from "../ducks/auth";

export const getAllBrokenItems = (search) => {
  return (dispatch) => {
    api
      .get(`items-broke?search=${search}`)
      .then((res) => {
        dispatch(addItems(res.data));
      })
      .catch(console.log);
  };
};
export const getAllReadyItems = (search) => {
  return (dispatch) => {
    api
      .get(`items-ready?search=${search}`)
      .then((res) => {
        dispatch(addItems(res.data));
      })
      .catch(console.log);
  };
};
export const getAllUsers = () => {
  return (dispatch) => {
    api
      .get("users")
      .then((res) => {
        dispatch(addUsers(res.data));
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
