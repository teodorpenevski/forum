import { Component, Input } from '@angular/core';
import { CommentService } from "../../services/comment.service";
import { Comment } from "../../models/comment";
import { VoteCommentComponent } from "../vote-comment/vote-comment.component";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() comment: Comment = {
    id: 1,
    comment: "I love dogs!",
    createdBy: "Jane Doe",
    createdAt: "2019-01-01T00:00:00.000Z",
    likes: 0,
    dislikes: 0
  }
  constructor(private service: CommentService) { }

  ngOnInit() {
    this.comment.createdAt = this.comment.createdAt.split('T')[0].split('-').reverse().join('.');
    this.service.getCommentCreator(this.comment.id).subscribe(creator => this.comment.createdBy = creator.username);
  }

  ngOnChanges() {
    this.comment.createdAt = this.comment.createdAt.split('T')[0].split('-').reverse().join('.');
    this.service.getCommentCreator(this.comment.id).subscribe(creator => this.comment.createdBy = creator.username);
  }

}
