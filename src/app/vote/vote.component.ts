import { Component } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})

export class VoteComponent {
  isUpvotedOrDownvoted: number = 0;
  isSaved: boolean = false;
  voteCount: number = 0;

  constructor() { }

  ngOnInit() {

  }

  upvote() {
    if (this.isUpvotedOrDownvoted === 1) {
      this.isUpvotedOrDownvoted = 0;
      this.voteCount--;
    } else if (this.isUpvotedOrDownvoted === 0) {
      this.isUpvotedOrDownvoted = 1;
      this.voteCount++;
    }
    else {
      this.isUpvotedOrDownvoted = 1;
      this.voteCount += 2;
    }
  }

  downvote() {
    if (this.isUpvotedOrDownvoted === -1) {
      this.isUpvotedOrDownvoted = 0;
      this.voteCount++;
    } else if (this.isUpvotedOrDownvoted === 0) {
      this.isUpvotedOrDownvoted = -1;
      this.voteCount--;
    }
    else {
      this.isUpvotedOrDownvoted = -1;
      this.voteCount -= 2;
    }
  }

  save() {
    this.isSaved = !this.isSaved;
  }
}
