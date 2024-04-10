import { Component } from '@angular/core';
import { NewsArticle } from './news-article/news-article.class';
import { fy23NewsArticles } from './news-article/fy23-news-articles';
import { Title } from '@angular/platform-browser';
import { ScreenSizeService } from 'src/app/services/screen-size.service';

@Component({
  selector: 'app-fy23-profitability',
  templateUrl: './fy23-profitability.component.html',
  styleUrls: ['./fy23-profitability.component.scss']
})
export class Fy23ProfitabilityComponent {

  constructor(private titleService: Title, private _screenSizeService: ScreenSizeService){
    this.titleService.setTitle('GameStop was profitable for the first time in 6 years - FY23')
  }
  public get newsArticles(): NewsArticle[] { return fy23NewsArticles; }
  public get moreThan800Px(): boolean { return this._screenSizeService.screenDimensions.width >= 800; }
}
