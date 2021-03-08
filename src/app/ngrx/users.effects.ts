import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { UsersServicesService } from '../services/users-services.service';
import { GetAllUsersActionsError, GetAllUsersActionsSucces, UsersActionsTypes } from './users.actions';

@Injectable()
export class UsersEffects {

  constructor(
    private userService: UsersServicesService,
    private effectActions: Actions
  ){}

  getAllUsersSuccessEffect:Observable<Action> = createEffect(
    ()=> this.effectActions.pipe(
      ofType(UsersActionsTypes.GET_ALL_USERS),
      mergeMap((action) => {
        return this.userService.getUsers().pipe(
          map((users)=> new GetAllUsersActionsSucces(users)),
          catchError((error)=>of(new GetAllUsersActionsError(error)))
        )
      })
    )
  )
}
