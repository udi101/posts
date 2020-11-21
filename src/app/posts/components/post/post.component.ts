import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IPost } from '@app/posts/interfaces/post.interface';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {
  @Input() post: IPost;
  constructor() { }

  ngOnInit(): void {
  }

}
