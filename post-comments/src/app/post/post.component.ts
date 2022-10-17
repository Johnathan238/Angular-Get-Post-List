import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../service/post-service.service';
import { Post, Comments } from '../interface/list-interface';

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
    console.log(this.posts);
  })
  }

  getComments(){
    this.postService.getComments()
    .subscribe((res: any) => {
      console.table(res)
      this.comments.push(...res)
      console.table(this.comments)
    })
  }

}
