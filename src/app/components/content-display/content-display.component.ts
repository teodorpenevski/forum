import { Component, Input } from '@angular/core';

import { Tag } from 'src/app/models/tag';
import { PostDTO } from 'src/app/models/post';
import { DisplayData } from 'src/app/interfaces/display-data';

@Component({
  selector: 'app-content-display',
  templateUrl: './content-display.component.html',
  styleUrls: ['./content-display.component.css']
})
export class ContentDisplayComponent {

  @Input() type: String = "inline";

  @Input() displayHeading = "Heading";

  @Input() displayData: Array<DisplayData> = [];

  parseToTag(item: Tag | number): Tag {
    return item as Tag;
  }

  parseToPostID(item: Tag | number): number {
    return item as number;
  }

}
