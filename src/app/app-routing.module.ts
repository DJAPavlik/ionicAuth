import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ArticleDisplayPage } from './article-display/article-display.module'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'view-articles/#edel', loadChildren: './view-articles/view-articles.module#ViewArticlesPageModule' },
  { path: 'view-articles', loadChildren: './view-articles/view-articles.module#ViewArticlesPageModule' },
  { path: 'article-display', loadChildren: './article-display/article-display.module#ArticleDisplayPageModule' },
  { path: 'article/display/:id',  loadChildren: './article-display/article-display.module#ArticleDisplayPageModule' },
  { path: 'article-edit', loadChildren: './article-edit/article-edit.module#ArticleEditPageModule' },
  { path: 'homeloggedin', loadChildren: './homeloggedin/homeloggedin.module#HomeloggedinPageModule' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
