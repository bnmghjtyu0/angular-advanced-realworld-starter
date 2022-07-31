import { BehaviorSubject, map, Observable } from 'rxjs';
import { shareReplay, switchMap } from 'rxjs/operators';
import { Component } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { Article } from 'src/app/interfaces/article';

/**
 * 全部文章列表
 */
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  displayArticles = false;
  refresh$ = new BehaviorSubject(null);
  /**畫面有用到，才會取得 API */
  articles$: Observable<Article[]> = this.refresh$.pipe(
    switchMap(() => this.postService.getArticles()),
    map((result) => result.articles),
    //cache the result
    shareReplay(1)
  );


  constructor(private postService: PostService) {}

  refresh() {
    this.refresh$.next(null);
  }
}
