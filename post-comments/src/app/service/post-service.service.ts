import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interface/list-interface';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  postUrl = `https://jsonplaceholder.typicode.com/posts`

  constructor(private http:HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.postUrl)
  }

}
