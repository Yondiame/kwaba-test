import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {NewsService} from '../../services/news.service';
import {News} from '../../services/news';
import {Articles} from '../../services/articles';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: Articles[];

  constructor(
    public authService: AuthService,
    public newsService: NewsService,
  ) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews(): void {
    this.newsService.getNews()
      .subscribe(news => this.news = news.articles);
  }

}
