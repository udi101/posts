import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPost } from '@app/posts/interfaces/post.interface';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.scss']
})
export class PostDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<PostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public post: IPost
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
  endLoop() {
    this.dialogRef.close(true);
  }
}
