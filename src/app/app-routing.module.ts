import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdduserComponent } from './mycomponents/adduser/adduser.component';
import { EdituserComponent } from './mycomponents/edituser/edituser.component';
import { HomeComponent } from './mycomponents/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: "full"},
  {path: "adduser", component: AdduserComponent, pathMatch: "full"},
  {path: "edituser/:id", component: EdituserComponent, pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
