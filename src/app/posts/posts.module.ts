import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostsDisplayComponent } from './components/posts-display/posts-display.component';
import { PostsDialogsComponent } from './containers/posts-dialogs/posts-dialogs.component';
import { PostDialogComponent } from './dialogs/post-dialog/post-dialog.component';
import { PostComponent } from './components/post/post.component';



@NgModule({
  declarations: [PostsComponent, PostsDisplayComponent, PostsDialogsComponent, PostDialogComponent, PostComponent],
  imports: [
    CommonModule,
    SharedModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
