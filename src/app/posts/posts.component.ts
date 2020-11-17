import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IPost } from './interfaces/post.interface';

import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {

  posts = new Array<IPost>();
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.getPosts();
  }


  getPosts() {
    this.postsService.getPostsInterval().subscribe(postss => this.posts = [...postss]);

  }


  ngOnDestroy() {
    this.postsService.killPostsInterval();
  }

}
