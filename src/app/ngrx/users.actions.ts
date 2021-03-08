import { Action } from '@ngrx/store';

import { Users } from '../models/users.model';

export enum UsersActionsTypes {
  GET_ALL_USERS = "[Users] Get All Users",
  GET_ALL_USERS_SUCCESS = "[Users] Get All Users Success",
  GET_ALL_USERS_ERROR = "[Users] Get All Users Error",
}

export class GetAllUsersActions implements Action {
  type: UsersActionsTypes= UsersActionsTypes.GET_ALL_USERS;

  constructor(
    public payload:any
  ){}
}

export class GetAllUsersActionsSucces implements Action {
  type: UsersActionsTypes= UsersActionsTypes.GET_ALL_USERS_SUCCESS;

  constructor(
    public payload:Users
  ){}
}

export class GetAllUsersActionsError implements Action {
  type: UsersActionsTypes= UsersActionsTypes.GET_ALL_USERS_ERROR;

  constructor(
    public payload:string
  ){}
}


export type UsersActions = GetAllUsersActions | GetAllUsersActionsSucces | GetAllUsersActionsError;
