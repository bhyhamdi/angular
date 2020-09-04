import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  _postlist: Post[];
  newpost = new Post();  
  
  constructor(private _service: NgserviceService, private _route: Router) { }

  ngOnInit(): void {
    this._service.postList().subscribe(
      data => {
        console.log("ok !!")
        this._postlist = data;

      },
      error => console.log("erreur ")
    )



  }
  Delete_Post(post: Post) {
    console.log(post.idPost)
    this._service.deletepost(post.idPost).subscribe(
      data => {
        console.log("post deleted ");
        this.ngOnInit();
      });

  }
  updatepost() {
    console.log(name);

  }
  post() {
    if (this.newpost.textPost != "") {
      this._service.addpost(this.newpost).subscribe(
        data => {
          console.log("post added");
          console.log(this.newpost);
          this.newpost.textPost = "";
          this.ngOnInit();
        })
    }
  }


}
