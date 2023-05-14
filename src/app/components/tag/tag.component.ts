import { Component, Input } from '@angular/core';
import { Tag } from 'src/app/models/tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent {

  @Input() tagInfo: Tag = {
    name: "tag"
  }
}
