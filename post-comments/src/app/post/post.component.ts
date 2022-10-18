import { Component, OnInit, Pipe } from '@angular/core';
import { PostServiceService } from '../service/post-service.service';
import { Post, Comments } from '../interface/list-interface';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[] = []
  comments: Comments[] = []
  comment: any
  commentsURL='https://jsonplaceholder.typicode.com/comments'

  constructor(private postService: PostServiceService,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.getPosts()
    this.getComments()
    console.log(this.posts)
    console.table(this.comments)
  }

  getPosts(){
    this.postService.getPosts()
    .subscribe((response: any) => {
    console.log(response);
    this.posts.push(...response)
    // console.log(this.posts);
  })
  }

  getComments(){
    this.postService.getComments()
    .subscribe((res: any) => {
      console.table(res)
      this.comments.push(...res)
      // console.table(this.comments)
    })
  }

  onComments(event: Event, id:Number){
    this.http.get(`${this.commentsURL}?postId=${id}`)
    .subscribe(data => this.comment = data)

    let text = ""
    for (let comment of this.comments){
      text+=`<p>${comment.id} - ${comment.body}</p>`
    }
    console.table(this.comment)
  }

}
