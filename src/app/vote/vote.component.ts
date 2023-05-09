import {Component, HostListener, Input} from '@angular/core';
import { VoteService } from "../vote.service";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})

export class VoteComponent {
  @Input() id: number = 1;
  isUpvotedOrDownvoted: number = 0;
  isSaved: boolean = false;
  voteCount: number = 0;
  likes: number = 0;
  dislikes: number = 0;
  clicked: boolean = false;

  constructor(private service: VoteService) { }

  ngOnInit() {
    this.getVoteCount();
    this.getVoteStatus();
    this.getSavedStatus();
  }

  getVoteCount() {
    this.service.getVoteCount(this.id).subscribe(post => {
      if (post) {
        this.voteCount = post.likes - post.dislikes;
        this.likes = post.likes;
        this.dislikes = post.dislikes;
      }
    });
  }

  getVoteStatus() {
    this.service.getVoteStatus('username', this.id).subscribe(status => {
      this.isUpvotedOrDownvoted = status;
    });
  }

  getSavedStatus() {
    this.service.getSavedStatus('username', this.id).subscribe(status => {
      this.isSaved = status;
    });
  }

  like() {
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
    this.service.likePost('username', this.id).subscribe();
  }

  dislike() {
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
    this.service.dislikePost('username', this.id).subscribe();
  }

  follow() {
    this.isSaved = !this.isSaved;
    this.service.followPost('username', this.id).subscribe();
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
