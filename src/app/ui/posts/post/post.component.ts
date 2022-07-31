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
  article$!: Observable<SingleArticle>;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(({ params }: Params) => {
      const { id } = params;
      this.article$ = this.postService.getArticle(id).pipe(shareReplay(1));
    });
  }
}
