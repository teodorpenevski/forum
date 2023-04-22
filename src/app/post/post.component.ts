import { Component } from '@angular/core';

import { VoteComponent } from "../vote/vote.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {
  postedBy = 'John Doe';
  postedDate = 'March 1, 2018';
  postTitle = 'Dogs are awesome';
  postContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc.";
  isLiked: boolean = false;
  isSaved: boolean = false;
  likesCount: number = 0;
  lastEditedDate = 'March 1, 2018';
  tags: string[] = ['dogs', 'pets', 'cute'];

  constructor() { }

  ngOnInit() {

  }

  like() {
    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      this.likesCount++;
    } else {
      this.likesCount--;
    }
  }
}
