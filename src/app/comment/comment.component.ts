import { Component, Input } from '@angular/core';
import {CommentService} from "../comment.service";
import { Comment } from "../comment";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() comment: Comment = {
    id: 1,
    comment: "I love dogs!",
    createdBy: "Jane Doe"
  }
  commentText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc."
  commentBy = 'John Doe';
  commentDate = '2019-01-01';
  lastEditDate = '2019-01-01';

  constructor(private service: CommentService) { }

  ngOnInit() {

  }

}
