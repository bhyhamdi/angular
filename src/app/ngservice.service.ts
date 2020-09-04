import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './article';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {
  SERVER_URL: string = "{Server URL}";
  constructor(private _http: HttpClient) { }
  ArticleList(): Observable<any> {
    return this._http.get("http://localhost:8081/hamdi/article");
  }
  addArticle(article: Article): Observable<any> {
    return this._http.put<any>("http://localhost:8081/hamdi/article", article);
  }
  deleteArticle(article: Article): Observable<any> {
    var url = "http://localhost:8081/hamdi/article/delete/";
    let id = article.idArticle;
    return this._http.delete(url + id, { responseType: "text" });

  }
  updateArticle(article: Article): Observable<any> {
    return this._http.put<any>("http://localhost:8081/hamdi/article/update", article)
  }
  getarticlebyid(id: number): Observable<any> {
    return this._http.get<any>("http://localhost:8081/hamdi/article/" + id)
  }
  getFacture(): Observable<any> {
    return this._http.get<any>("http://localhost:8081/hamdi/facture")
  }
  postList(): Observable<any> {
    return this._http.get("http://localhost:8081/post/all");
  }
  deletepost(id: number) {
    return this._http.delete("http://localhost:8081/post/delete/" + id, { responseType: "text" });
  }
  addpost(post: Post): Observable<any> {
    return this._http.put<any>("http://localhost:8081/post/add/1", post);
  }
  updatepost(post: Post): Observable<any> {
    return this._http.put<any>("http://localhost:8081/post/update", post)
  }
  getpostbyid(id: number): Observable<any>{
    return this._http.get<any>("http://localhost:8081/post/"+id)
  } 
}
