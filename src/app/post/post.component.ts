import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { PostService } from "../post.service";
import { Post } from "../post";
import { Comment } from "../comment";
import { Tag } from "../tag";

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
  postedBy = 'John Doe';
  postedDate = 'March 1, 2018';
  isSaved: boolean = false;
  lastEditedDate = 'March 1, 2018';
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
  comments: Comment[] = [
    {
      id: 1,
      comment: "I love dogs!",
      createdBy: "Jane Doe"
    }
  ];
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
              private service: PostService
              ) { }

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getPost(id).subscribe(post => {
      if (post) {
        this.id = post.id;
        this.text = post.text;
        this.title = post.title;
        this.likes = post.likes;
        this.dislikes = post.dislikes;
        this.tags = post.tags;
        this.comments = post.comments;
        this.commentCount = post.comments.length;
      }
    });
  }

  onComment() {
    this.service.onComment(this.id, this.commentForm.value.commentText!!).subscribe();
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
