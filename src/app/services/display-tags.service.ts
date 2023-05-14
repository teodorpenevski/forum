import { Injectable } from '@angular/core';

import { Tag } from '../models/tag';
import { TagService } from './tag.service';
import { DisplayData } from '../interfaces/display-data';

@Injectable({
  providedIn: 'root'
})
export class DisplayTagsService {

  // apiTags: Tag[] = [];

  constructor(private tagService: TagService) { }

  // ngOnInit() {
  //   this.getTagsFromApi();
  // }

  // getTagsFromApi() {
  //   this.tagService.getTags().subscribe(tags => this.apiTags = tags);
  //   console.log(this.apiTags);
  // }

  getDisplayAllTags(allTags: Tag[]): Array<DisplayData> {
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

  getDisplayTrendingTags(allTags: Tag[]): Array<DisplayData> {
    const displayTags: Array<DisplayData> = [
      {
        heading: '',
        type: 'tag',
        data: []
      }
    ];

    // TODO: implement logic for determining trending tags
    /*
    Logic:
      1. Get all post created in the past week (7days) from api;
      2. Determine how many times each tag (from allTags) is present in all posts;
      3. Sort by number of pressence ( largest first );
      4. Add top 50 tags to displayTags
    */

    return displayTags;
  }

  getDisplayPopularTags(allTags: Tag[]): Array<DisplayData> {
    const displayTags: Array<DisplayData> = [
      {
        heading: 'All time',
        type: 'tag',
        data: []
      },
      {
        heading: 'This year',
        type: 'tag',
        data: []
      },
      {
        heading: 'This month',
        type: 'tag',
        data: []
      }
    ];

    /* TODO: implement logic for determining popular tags */
    /*
    Logic (for 'All time'):
      1. Get all post from api;
      2. Determine how many times each tag (from allTags) is present in all posts;
      3. Sort by number of pressence ( largest first );
      4. Add top 10 tags to displayTags

    Logic (for 'This year'):
      1. Get all post created in the past year (365days) from api;
      2. Determine how many times each tag (from allTags) is present in all posts;
      3. Sort by number of pressence ( largest first );
      4. Add top 10 tags to displayTags

    Logic (for 'This month'):
      1. Get all post created in the past month (30days) from api;
      2. Determine how many times each tag (from allTags) is present in all posts;
      3. Sort by number of pressence ( largest first );
      4. Add top 10 tags to displayTags
    */

    return displayTags;
  }
}
