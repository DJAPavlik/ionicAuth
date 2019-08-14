import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticlesService } from '../articles.service';
import { Article } from '../../models/articles';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-article-display',
  templateUrl: './article-display.page.html',
  styleUrls: ['./article-display.page.scss'],
})
export class ArticleDisplayPage implements OnInit {
  
  public pubarticle:  Article[];
  constructor(
    private route: ActivatedRoute,
    private articlesService:  ArticlesService
  ) {}


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getArticle(id);
  }
  

  getArticle(id): void {
  
      this.articlesService.getArticle(id).subscribe(
        (response:any) => {
          this.pubarticle = response.post;
          console.log('---THIS  IS IT????')
          console.log(this.pubarticle)
          console.log('  --- ')
        }
      );
    }   // end getArticle(id)

}  // end class ArticleDisplayPage
