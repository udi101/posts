import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsDialogsComponent } from './containers/posts-dialogs/posts-dialogs.component';
import { PostsComponent } from './posts.component';


const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'dialogs', component: PostsDialogsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
