import { GetAllUsersActions } from 'src/app/ngrx/users.actions';

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ngrx-users-nav-bar',
  templateUrl: './users-nav-bar.component.html',
  styleUrls: ['./users-nav-bar.component.scss']
})
export class UsersNavBarComponent implements OnInit {

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
  }

  getAllUsers(){
    this.store.dispatch(new GetAllUsersActions({}))
  }

  getSelectedUsers(){

  }

}
