import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { Articles } from 'src/app/interfaces/articles';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  articles$!: Observable<Articles>;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.articles$ = this.postService.getArticles();
  }
}
