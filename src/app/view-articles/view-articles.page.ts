import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 


import { ArticlesService } from '../articles.service';
import { Article } from '../../models/articles';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-view-articles',
  templateUrl: './view-articles.page.html',
  styleUrls: ['./view-articles.page.scss'],
})
export class ViewArticlesPage implements OnInit {
  locAppRoute = new AppRoutingModule();
  
  articles:any
  res:any
  article = new Article();
  
  errorMessage: any;
  constructor(private articleService: ArticlesService ) { }

  ngOnInit() {
    console.log('START ngOnInit in view-articles-pages')

    this.articleService.getAllArticles()
    console.log('END  ngOnInit in view-articles-pages')
  }



  dispAllArticles(){console.log('In dispAllArticles')}




} // end class ViewArticlesPage
