import { Component, HostListener, Input } from '@angular/core';
import { VoteService } from "../../services/vote.service";
import { Comment } from "../../models/comment";

@Component({
  selector: 'app-vote-comment',
  templateUrl: './vote-comment.component.html',
  styleUrls: ['./vote-comment.component.css']
})

export class VoteCommentComponent {
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
  }

  ngOnChanges() {
    this.getVoteCount();
    this.getVoteStatus();
  }

  getVoteCount() {
    this.service.getVoteCountComment(this.id).subscribe((comment: Comment | null) => {
      if (comment) {
        this.likes = comment.likes;
        this.dislikes = comment.dislikes;
      }
    });
  }

  getVoteStatus() {
    this.service.getVoteStatusComment('username', this.id).subscribe(status => {
      this.voteStatus = status
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
    this.service.likeComment('username', this.id).subscribe();
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
    this.service.dislikeComment('username', this.id).subscribe();
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
