import { CreateComponent } from './create/create.component';
import { PostComponent } from './post/post.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  /**檢視頁 */
  { path: 'posts', component: PostsComponent },
  /**單篇內容 */
  { path: 'post/:id', component: PostComponent },
  /**建立文章 */
  { path: 'create', component: CreateComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
