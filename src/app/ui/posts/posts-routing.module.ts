import { CreateComponent } from './create/create.component';
import { PostComponent } from './post/post.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  /**檢視頁 */
  { path: 'posts', component: PostsComponent },
  /**單篇內容 */
  { path: 'posts/:id', component: PostComponent },
  /**建立文章 */
  { path: 'create', component: CreateComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
