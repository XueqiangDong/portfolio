import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'blog', redirectTo: '/blog', pathMatch: 'full'},
  {path: 'projects', redirectTo: '/projects', pathMatch: 'full'},
  {path: 'about', redirectTo: '/about', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
