import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostsDisplayComponent } from './components/posts-display/posts-display.component';



@NgModule({
  declarations: [PostsComponent, PostsDisplayComponent],
  imports: [
    CommonModule,
    SharedModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
