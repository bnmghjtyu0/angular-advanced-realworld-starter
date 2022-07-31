import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Article } from 'src/app/interfaces/article';
import { PostService } from 'src/app/post.service';

@Component({
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  article$: Observable<Article> = this.route.paramMap.pipe(
    map((params) => params.get('id') || ''),
    switchMap((id) => {
      console.log(id)
      return this.postService.getArticle(id)
    }),
    map((result) => result.article)
  );

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}
}
