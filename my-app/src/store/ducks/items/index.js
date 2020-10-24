import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = [];

export const addItem = createAction("ADD_ITEM");

export const addItems = createAction("ADD_ITEMS");

export default createReducer(INITIAL_STATE, {
  [addItem.type]: (state, action) => [...state, action.payload],
  [addItems.type]: (state, action) => [...action.payload],
});
