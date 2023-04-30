import { Component, Input } from '@angular/core';

import { Tag } from 'src/app/models/tag';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-content-display',
  templateUrl: './content-display.component.html',
  styleUrls: ['./content-display.component.css']
})
export class ContentDisplayComponent {

  @Input() type: String = "inline";

  @Input() displayHeading = "Heading";

  @Input() displayData: Array<Tag | Post> = [];

  parseToTag(item: Tag | Post): Tag {
    return item as Tag;
  }

  parseToPost(item: Tag | Post): Post {
    return item as Post;
  }

}
