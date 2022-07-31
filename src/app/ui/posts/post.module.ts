import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { CreateComponent } from './create/create.component';
import { PostComponent } from './post/post.component';
import { PostsRoutingModule } from './post-routing.module';

@NgModule({
  declarations: [
    PostsComponent,
    CreateComponent,
    PostComponent
  ],
  imports: [ CommonModule,PostsRoutingModule ],
  exports: [],
  providers: [],
})
export class PostModule {}
