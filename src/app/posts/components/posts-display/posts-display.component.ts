import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '@app/posts/interfaces/post.interface';

@Component({
  selector: 'posts-display',
  templateUrl: './posts-display.component.html',
  styleUrls: ['./posts-display.component.scss']
})
export class PostsDisplayComponent implements OnInit {

  postsByUserId: { [userId: number]: Array<IPost> } = {};

  _posts = new Array<IPost>();
  @Input() set posts(value: Array<IPost>) {
    this._posts = [...value];
    value && value.forEach(post => {              // Creaing a dictionary with O(n)
      if (!this.postsByUserId[post.userId]) {
        this.postsByUserId[post.userId] = [post];
      } else {
        this.postsByUserId[post.userId].push(post);
      }
    });
  }


  usersIds = new Array<number>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.usersIds);
  }

  getPostsById(id: number): Array<IPost> {
    return this._posts.filter(post => post.userId === id);
  }
}
