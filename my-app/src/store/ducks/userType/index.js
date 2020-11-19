import { createAction, createReducer } from "@reduxjs/toolkit";
const INITIAL_STATE = {
  userId: 0,
};

export const userBasic = createAction("USER_BASIC");
export const userInfo = createAction("USER_INFO");
export const userAdmin = createAction("USER_ADMIN");
/* export const userEletro = createAction("USER_ELETRO");
export const userAdmin = createAction("USER_ADMIN");
export const userCoord = createAction("USER_COORD"); */

export default createReducer(INITIAL_STATE, {
  [userBasic.type]: (state) => ({ ...state, userId: 1 }),
  [userInfo.type]: (state) => ({ ...state, userId: 2 }),
  [userAdmin.type]: (state) => ({ ...state, userId: 3 }),
});
