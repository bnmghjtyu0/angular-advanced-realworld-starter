import { map, Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
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
  /**畫面有用到，才會取得 API */
  articles$: Observable<Article[]> = this.postService.getArticles().pipe(
    map((result) => result.articles),
    //cache the result
    shareReplay(1)
  );

  constructor(private postService: PostService) {}
}
