import { Component, OnInit, Pipe } from '@angular/core';
import { PostServiceService } from '../service/post-service.service';
import { Post, Comments } from '../interface/list-interface';
import { map } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[] = []
  comments: Comments[] = []

  constructor(private postService: PostServiceService) { }

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

  onComments(){
    // return this.postService.getComments()
    // .pipe(map(comments => comments.postId))
    console.log(this.comments[0].email)
  }

}
