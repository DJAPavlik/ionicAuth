import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/articles';

// 3. Create a JSON header to be attached to outbound post requests
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private url:string 
  private getArticleUrl:string
  
  constructor(private http: HttpClient) {
    let l = window.location;
    let host:string;
    
    if(l.port == '8100'){
      host = 'localhost:3000';
    }else{
      host = l.hostname + ((l.port.length>0)?':' + l.port:'');
    }
/*
    NOTE: routes /api/articles and /api/articles/ 
            return array articles

          route /api/articles/id... 
            returns array post  

*/
    this.url = `${l.protocol}//${host}/api/articles/`;
    this.getArticleUrl=`${l.protocol}//${host}/api/articles/`;
  }

  getArticlesArray(): Observable<Article[]> {
     console.log('getArticlesArray()');
     return this.http.get<Article[]>(this.getArticleUrl);
   }
   getArticle(id: string): Observable<Article> {
    //console.log('in service getArticle');
    return this.http.get<Article>(`${this.url}/${id}`);
  }

} // end class ArticlesService 
