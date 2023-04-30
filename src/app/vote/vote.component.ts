import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})

export class VoteComponent {
  isUpvotedOrDownvoted: number = 0;
  isSaved: boolean = false;
  voteCount: number = 0;
  clicked: boolean = false;

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

  edit() {

  }

  delete() {

  }

  report() {

  }

  @HostListener('click', ['$event.target'])
  onClick(element: any) {
    if (element.innerText === '...')
      this.clicked = !this.clicked;
  }

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(element: any) {
    if (element.innerText !== '...')
      this.clicked = false;
  }
}
