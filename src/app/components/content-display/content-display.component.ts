import { Component, Input } from '@angular/core';

import { Tag } from 'src/app/models/tag';
import { Post } from 'src/app/models/post';
import { DisplayData } from 'src/app/models/display-data';

@Component({
  selector: 'app-content-display',
  templateUrl: './content-display.component.html',
  styleUrls: ['./content-display.component.css']
})
export class ContentDisplayComponent {

  @Input() type: String = "inline";

  @Input() displayHeading = "Heading";

  @Input() displayData: Array<DisplayData> = [];

  parseToTag(item: Tag | Post): Tag {
    return item as Tag;
  }

  parseToPost(item: Tag | Post): Post {
    return item as Post;
  }

}
