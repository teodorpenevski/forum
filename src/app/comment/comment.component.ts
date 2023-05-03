import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() commentId = -1;
  commentText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eu nunc."
  commentBy = 'John Doe';
  commentDate = '2019-01-01';
  lastEditDate = '2019-01-01';
  tags = ['tag1', 'tag2', 'tag3'];

  constructor() { }
}
