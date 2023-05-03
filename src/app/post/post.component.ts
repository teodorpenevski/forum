import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {
  user: string = 'John Doe';
  postId: number = 1;
  postedBy = 'John Doe';
  postedDate = 'March 1, 2018';
  postTitle = 'Dogs are awesome';
  postText = 'Dogs are the best pets ever. They are loyal, friendly, and cute. They are also a lot of work. You have to feed them, walk them, and clean up after them. But it is all worth it.';
  isSaved: boolean = false;
  lastEditedDate = 'March 1, 2018';
  tags: string[] = ['dogs', 'pets', 'cute'];
  comments: number[] = [1, ];
  commentCount: number = 1;
  sortAttribute: string = 'created';
  ascendingOrDescending: boolean = true;

  commentForm = new FormGroup({
    user: new FormGroup('', [
      Validators.required
    ]),
    commentText: new FormControl('', [
      Validators.required
    ]),
  });

  constructor(private route: ActivatedRoute,
              private postService: PostService
              ) { }

  ngOnInit() {

  }

  getPost() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPost(id).subscribe(post => {
      if (post) {
        this.postId = post.postId;
        this.postedBy = post.postedBy;
        this.postedDate = post.postedDate;
        this.postTitle = post.postTitle;
        this.postText = post.postText;
        this.comments = post.comments;
        this.commentCount = post.commentCount;
      }
    });
  }

  onComment() {
    this.comments.push(Math.max(...this.comments) + 1);
    this.commentCount++;
    console.log(this.commentForm.value);
  }

  onEdit() {

  }

  onDelete() {

  }

  sort(attribute: string) {
    if (this.sortAttribute === attribute) {
      this.ascendingOrDescending = !this.ascendingOrDescending;
    } else {
      this.ascendingOrDescending = true;
      this.sortAttribute = attribute;
    }
  }
}
