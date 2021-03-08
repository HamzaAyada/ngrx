import { Users } from '../models/users.model';
import { UsersActions, UsersActionsTypes } from './users.actions';

export enum UsersStateEnum {
  LOADING = "Loading",
  LOADED = "Loaded",
  INITIAL = "Initial",
  ERROR = "Error"
}

export interface UsersState {
  users : Users[],
  errorMessage : string,
  dataState : UsersStateEnum
}


const initState: UsersState = {
  users: [],
  errorMessage: "",
  dataState:UsersStateEnum.INITIAL
}

export function userReducer(state:UsersState = initState, action: UsersActions): UsersState {
  switch (action.type) {
    case UsersActionsTypes.GET_ALL_USERS:
      return {...state, dataState:UsersStateEnum.LOADING}
    case UsersActionsTypes.GET_ALL_USERS_SUCCESS:
      return {...state, dataState:UsersStateEnum.LOADED, users: action.payload}
    case UsersActionsTypes.GET_ALL_USERS_ERROR:
      return {...state, dataState: UsersStateEnum.ERROR, errorMessage: action.payload }
    default: return {...state};
  }
}
