import { Component } from '@angular/core';

import { Tag } from 'src/app/models/tag';
import { DisplayData } from 'src/app/interfaces/display-data';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-tags-page',
  templateUrl: './tags-page.component.html',
  styleUrls: ['./tags-page.component.css']
})
export class TagsPageComponent {

  apiTags: Tag[] = [];

  numberOfTags: string;

  allTagsDisplay: Array<DisplayData> = [];

  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.getTagsFromApi();
  }

  getTagsFromApi() {
    this.tagService.getTags().subscribe(tags => {
      this.apiTags = tags;
      this.numberOfTags = tags.length.toString() + ' tags';
      this.allTagsDisplay = this.displayAllTags(this.apiTags);
    });
  }

  displayAllTags(allTags: Tag[]): Array<DisplayData> {
    const displayTags: Array<DisplayData> = [
      {
        heading: '',
        type: 'tag',
        data: []
      }
    ];

    for (let tag of allTags) {
      displayTags[0].data.push(tag);
    }

    return displayTags;
  }

}
