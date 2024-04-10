import { Component } from '@angular/core';
import { NewsArticle } from './news-article/news-article.class';
import { fy23NewsArticles } from './news-article/fy23-news-articles';

@Component({
  selector: 'app-fy23-profitability',
  templateUrl: './fy23-profitability.component.html',
  styleUrls: ['./fy23-profitability.component.scss']
})
export class Fy23ProfitabilityComponent {

  public get newsArticles(): NewsArticle[] { return fy23NewsArticles; }
}
