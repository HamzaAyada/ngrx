import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersState, UsersStateEnum } from 'src/app/ngrx/users.reducer';

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ngrx-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersState$:Observable<UsersState> | null = null;

  readonly DataState = UsersStateEnum

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.usersState$=this.store
    .pipe(
      map((state)=> state.usersState)
    )
  }


}
