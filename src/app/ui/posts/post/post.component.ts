import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, shareReplay } from 'rxjs';
import { Article } from 'src/app/interfaces/article';
import { SingleArticle } from 'src/app/interfaces/single-article';
import { PostService } from 'src/app/post.service';

@Component({
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  /**article?: 預設可以 undefined */
  article?: Article;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    // 取得必要參數
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id') || '';

      this.postService.getArticle(id).subscribe({
        next: (result) => {
          this.article = result.article;
        },
      });
    });
  }
}
