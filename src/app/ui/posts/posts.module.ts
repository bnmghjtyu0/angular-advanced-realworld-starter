import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { PostComponent } from './post/post.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';

@NgModule({
  declarations: [
    PostsComponent,
    CreateComponent,
    PostComponent
  ],
  imports: [ CommonModule,PostsRoutingModule ,ReactiveFormsModule],
  exports: [],
  providers: [],
})
export class PostsModule {}
