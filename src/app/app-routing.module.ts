import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './components/new/new.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'new', component: NewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
