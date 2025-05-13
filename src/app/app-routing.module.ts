import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialorderComponent } from '../materialorder/materialorder.component';

const routes: Routes = [
  { path: '', redirectTo: '/material-order', pathMatch: 'full' },
  { path: 'material-order', component: MaterialorderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
