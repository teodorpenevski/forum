import {Component, HostListener, Input} from '@angular/core';
import { VoteService } from "../vote.service";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})

export class VoteComponent {
  @Input() id: number = 1;
  voteStatus: number = 0;
  followStatus: boolean = false;
  likes: number = 0;
  dislikes: number = 0;
  clicked: boolean = false;

  constructor(private service: VoteService) { }

  ngOnInit() {
    this.getVoteCount();
    this.getVoteStatus();
    this.getFollowStatus();
  }

  getVoteCount() {
    this.service.getVoteCount(this.id).subscribe(post => {
      if (post) {
        this.likes = post.likes;
        this.dislikes = post.dislikes;
      }
    });
  }

  getVoteStatus() {
    this.service.getVoteStatus('username', this.id).subscribe(status => {
      this.voteStatus = status
    });
  }

  getFollowStatus() {
    this.service.getFollowStatus('username', this.id).subscribe(status => {
      this.followStatus = status;
    });
  }

  like() {
    if (this.voteStatus === 1) {
      this.voteStatus = 0;
      this.likes--;
    } else if (this.voteStatus === 0) {
      this.voteStatus = 1;
      this.likes++;
    }
    else {
      this.voteStatus = 1;
      this.likes++;
      this.dislikes--;
    }
    this.service.likePost('username', this.id).subscribe();
  }

  dislike() {
    if (this.voteStatus === -1) {
      this.voteStatus = 0;
      this.dislikes--;
    } else if (this.voteStatus === 0) {
      this.voteStatus = -1;
      this.dislikes++;
    }
    else {
      this.voteStatus = -1;
      this.likes--;
      this.dislikes++;
    }
    this.service.dislikePost('username', this.id).subscribe();
  }

  follow() {
    this.followStatus = !this.followStatus;
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
