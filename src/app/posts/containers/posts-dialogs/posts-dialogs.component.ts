import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPost } from '@app/posts/interfaces/post.interface';
import { PostsService } from '@app/posts/services/posts.service';

import { MatDialog } from '@angular/material/dialog';
import { PostDialogComponent } from '@app/posts/dialogs/post-dialog/post-dialog.component';
import { Subject, pipe } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-posts-dialogs',
  templateUrl: './posts-dialogs.component.html',
  styleUrls: ['./posts-dialogs.component.scss']
})
export class PostsDialogsComponent implements OnInit {

  posts = new Array<IPost>();
  currentPostDisplayed: number = 0;
  stopDialogLoop$ = new Subject<void>();

  constructor(private postsService: PostsService, private dialog: MatDialog, private router: Router) { }


  ngOnInit(): void {
    this.postsService.getPosts().pipe(takeUntil(this.stopDialogLoop$)).subscribe(posts => {
      this.posts = [...posts];
      this.openDialogsBySequence();
    })

  }

  openDialogsBySequence() {
    this.dialog.open(PostDialogComponent, { data: this.posts[this.currentPostDisplayed] }).afterClosed().subscribe((stop: boolean = false) => {
      this.currentPostDisplayed++;
      if (!stop) {
        this.openDialogsBySequence();
      } else {
        this.router.navigate(['/posts'])
      }
    });
  }
}
