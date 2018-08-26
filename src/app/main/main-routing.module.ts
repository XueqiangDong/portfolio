import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainHomeComponent} from "./main-home/main-home.component";
import {MainBlogComponent} from "./main-blog/main-blog.component";
import {MainAboutComponent} from "./main-about/main-about.component";
import {MainProjectsComponent} from "./main-projects/main-projects.component";

const routes: Routes = [
  {path: 'home', component: MainHomeComponent},
  {path: 'blog', component: MainBlogComponent},
  {path: 'projects', component: MainProjectsComponent},
  {path: 'about', component: MainAboutComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
