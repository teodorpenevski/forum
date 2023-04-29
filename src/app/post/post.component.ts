import { Component } from '@angular/core';

import { VoteComponent } from "../vote/vote.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {
  user: string = 'John Doe';
  postedBy = 'John Doe';
  postedDate = 'March 1, 2018';
  postTitle = 'Dogs are awesome';
  isLiked: boolean = false;
  isSaved: boolean = false;
  likesCount: number = 0;
  lastEditedDate = 'March 1, 2018';
  tags: string[] = ['dogs', 'pets', 'cute'];
  answers: number[] = [1, ];

  constructor() { }

  ngOnInit() {

  }

  onComment() {
    this.answers.push(Math.max(...this.answers) + 1);
  }

  onEdit() {

  }

  onDelete() {

  }
}
