import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { Articles } from 'src/app/interfaces/articles';
import { Article } from 'src/app/interfaces/article';

/**
 * 全部文章列表
 */
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  articles: Article[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getArticles().subscribe({
      next: (result) => {
        this.articles = result.articles;
      },
    });
  }
}
