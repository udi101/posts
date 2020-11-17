import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/post.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, timer, of, Subject } from 'rxjs';
import { catchError, switchMap, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private killPostsInterval$: Subject<void> = new Subject<void>();

  constructor(private httpClient: HttpClient) { }


  killPostsInterval() {
    this.killPostsInterval$.next();
  }

  getPosts(): Observable<Array<IPost>> {
    return this.httpClient.get<Array<IPost>>('https://jsonplaceholder.typicode.com/posts');
  }

  // Get the posts every 60 secs
  getPostsInterval() {
    const postsInterval$ = timer(0, 60000).pipe(
      takeUntil(this.killPostsInterval$),
      switchMap(() => this.getPosts()),
      catchError((err) => {
        console.log(err);
        return of(<Array<IPost>>[]);
      })
    );
    return postsInterval$;
  }


}

