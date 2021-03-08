import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersNavBarComponent } from './components/users/users-nav-bar/users-nav-bar.component';
import { UsersComponent } from './components/users/users.component';
import { UsersEffects } from './ngrx/users.effects';
import { userReducer } from './ngrx/users.reducer';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({usersState: userReducer}),
    EffectsModule.forRoot([UsersEffects]), //ToDo add Effect
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
