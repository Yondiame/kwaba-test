import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {NewsComponent} from './components/news/news.component';
import {AuthGuard} from './guard/auth.guard';
import {LoggedInGuard} from './guard/logged-in.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: SignInComponent, canActivate: [LoggedInGuard] },
  { path: 'register', component: SignUpComponent, canActivate: [LoggedInGuard] },
  { path: 'news', component: NewsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
