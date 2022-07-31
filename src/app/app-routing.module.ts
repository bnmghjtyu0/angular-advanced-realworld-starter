import { LayoutComponent } from './layout/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'posts' },
  {
    path: 'login',
    loadChildren: () =>
      import('./ui/login/login.module').then((m) => m.LoginModule),
  },

  {
    path: '',
    component:LayoutComponent,
    children: [
      {
        path: 'posts',
        loadChildren: () =>
          import('./ui/posts/post.module').then((m) => m.PostModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
