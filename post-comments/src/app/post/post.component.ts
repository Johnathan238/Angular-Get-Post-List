import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../service/post-service.service';
import { Post } from '../interface/list-interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[] = []
  constructor(private postService: PostServiceService) { }

  ngOnInit(): void {
    this.getPosts()
    console.log(this.posts)
  }

  getPosts(){
    this.postService.getPosts()
    .subscribe((response: any) => {
    console.log(response);
    this.posts.push(...response)
    console.log(this.posts);
  })
  }

}
