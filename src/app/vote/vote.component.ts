import { Component } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})

export class VoteComponent {
  isLiked: boolean = false;
  isSaved: boolean = false;
  likeCount: number = 0;

  constructor() { }

  ngOnInit() {

  }

  like() {
    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      this.likeCount++;
    } else {
      this.likeCount--;
    }
  }

  save() {
    this.isSaved = !this.isSaved;
  }
}
