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
  articles: Article[];
 
  errorMessage: any;
  constructor(private articlesService: ArticlesService ) { }


  ngOnInit() {
    this.getArticles();
  }
  // 5. Craete a local wrapper for
  getArticles(): void {
    this.articlesService.getArticlesArray().subscribe(
      (response:any) => {
        this.articles = response.articles;
      }
    );
  }



  dispAllArticles(){console.log('In dispAllArticles')}




} // end class ViewArticlesPage


/*

  // 3. Create a articles property of type article
  articles: Article[];

  // 4. Inject the ArticlesService into the constructor
  constructor(private articlesService: ArticlesService) { }

  // 6. Make a call to the service on initialization
  ngOnInit() {
    this.getArticles();
  }

  // 5. Craete a local wrapper for
  getArticles(): void {
    this.articlesService.getArticles().subscribe(
      (response:any) => {
        this.articles = response.articles;
       // console.log(this.articles);
      }
    );
  }


*/
