import { Component } from '@angular/core';
import { PostService } from "../../services/post.service";
import { DisplayData } from 'src/app/interfaces/display-data';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent {

  postIds: number[] = [];

  numberOfPosts: string;

  allPostsByIDsDisplay: Array<DisplayData> = [];

  isExpanded = false;
  sortAttribute = 'created';

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPostIds();
  }

  getPostIds() {
    return this.postService.getPostIds().subscribe(postIds => {
      this.postIds = postIds;
      this.numberOfPosts = postIds.length.toString() + ' posts';
      this.allPostsByIDsDisplay = this.displayAllPostsByID(this.postIds);
    });
  }

  sort(attribute: string) {
    this.sortAttribute = attribute;
  }

  displayAllPostsByID(allPostIDs: number[]): Array<DisplayData> {
    const displayPostsByIDs: Array<DisplayData> = [
      {
        heading: '',
        type: 'post',
        data: []
      }
    ];

    for (let postID of allPostIDs) {
      displayPostsByIDs[0].data.push(postID);
    }

    return displayPostsByIDs;
  }


}
