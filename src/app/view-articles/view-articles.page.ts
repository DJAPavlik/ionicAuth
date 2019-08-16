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

  private last5
  isLoggedIn:boolean = false;
  isLoggedOut:boolean = false;
 
  errorMessage: any;
  constructor(private articlesService: ArticlesService ) { }


  ngOnInit() {
    this.getArticles();
    console.log('  in view-articles')
    console.log(window.location)
    
    this.last5 = JSON.stringify(window.location.href)
    this.last5 = this.last5.substr( this.last5.length - 5)
    console.log(this.last5)
    if (this.last5 == 'edel"'){
      console.log("OKAY TO EDIT & DELETE")
      this.isLoggedIn = true
      this.isLoggedOut = false
    }
    else{ 
      console.log("  cannot edit or delete")
      this.isLoggedIn = false
      this.isLoggedOut = true
    }
  }
  // 5. Craete a local wrapper for
  getArticles(): void {
    this.articlesService.getArticlesArray().subscribe(
      (response:any) => {
        this.articles = response.articles;
     //   console.log(this.articles)
      }
    );
  }  // end getArticles




  




} // end class ViewArticlesPage


