import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {
  user: string = 'John Doe';
  postId: number = 1;
  postedBy = 'John Doe';
  postedDate = 'March 1, 2018';
  postTitle = 'Dogs are awesome';
  isLiked: boolean = false;
  isSaved: boolean = false;
  likesCount: number = 0;
  lastEditedDate = 'March 1, 2018';
  tags: string[] = ['dogs', 'pets', 'cute'];
  answers: number[] = [1, ];
  answersCount: number = 1;
  sortAttribute: string = 'created';
  ascendingOrDescending: boolean = true;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  }

  getPost() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
  }

  onComment() {
    this.answers.push(Math.max(...this.answers) + 1);
    this.answersCount++;
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
