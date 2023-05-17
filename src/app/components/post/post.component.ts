import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Location } from '@angular/common';

import { PostService } from "../../services/post.service";
import { Post } from "../../models/post";
import { Comment } from "../../models/comment";
import { Tag } from "../../models/tag";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements Post {
  id: number = 1;
  user: string = 'John Doe';
  title = 'Dogs are awesome';
  text = 'Dogs are the best pets ever. They are loyal, friendly, and cute. They are also a lot of work. You have to feed them, walk them, and clean up after them. But it is all worth it.';
  likes = 0;
  dislikes = 0;
  createdBy = 'John Doe';
  createdAt = 'March 1, 2018';
  updatedAt = 'March 1, 2018';
  tags: Tag[] = [
    {
      name: 'dogs'
    },
    {
      name: 'pets'
    },
    {
      name: 'animals'
    }
  ];
  comments: Comment[] = [];
  commentCount: number = 0;

  sortAttribute: string = 'created';
  ascendingOrDescending: boolean = true;

  commentForm = new FormGroup({
    text: new FormControl('', [
      Validators.required
    ]),
  });

  constructor(private route: ActivatedRoute,
              private service: PostService,
              private location: Location,
              private authentication: AuthService) { }

  ngOnInit() {
    this.authentication.getCurrentUser().subscribe(user => {
      this.user = user;
    });
    this.getPost();
  }

  getPost() {
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getPost(postId).subscribe(post => {
      if (post) {
        this.id = post.id;
        this.text = post.text;
        this.title = post.title;
        this.likes = post.likes;
        this.dislikes = post.dislikes;
        this.tags = post.tags;
        this.comments = post.comments;
        this.commentCount = post.comments.length;
        this.createdAt = post.createdAt.split('T')[0].split('-').reverse().join('.');
        this.updatedAt = post.updatedAt.split('T')[0].split('-').reverse().join('.');
      }
    });
  }

  onComment() {
    if (this.commentForm.invalid) return;
    this.service.onComment(this.id, this.commentForm.value.text!!).subscribe({
      complete: () => {
        this.updateComments();
      }
    });
    this.commentForm.reset();
  }

  updateComments() {
    this.service.getPostComments(this.id, this.sortAttribute, this.ascendingOrDescending).subscribe(comments => {
      if (comments) {
        this.comments = comments;
        this.commentCount = comments.length;
      }
      else {
        this.comments = [];
        this.commentCount = 0;
      }
    });
  }

  sort(attribute: string) {

    if (this.sortAttribute === attribute) {

      this.ascendingOrDescending = !this.ascendingOrDescending;

    } else {

      this.ascendingOrDescending = true;
      this.sortAttribute = attribute;

    }

    this.updateComments();
  }

  goBack(): void {
    this.location.back();
  }
}
