import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

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

  filterRoute = '/posts';
  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.getPostIds();
  }



  getPostIds() {
    if (this.route.snapshot.queryParamMap.has('q')) {
      // @ts-ignore
      return this.postService.searchPosts(this.route.snapshot.queryParamMap.get('q'), this.route.snapshot.queryParamMap.get('tags')).subscribe(postIds => {
        this.postIds = postIds;
        this.numberOfPosts = postIds.length.toString() + ' posts';
        this.allPostsByIDsDisplay = this.displayAllPostsByID(this.postIds);
      });
    }

    return this.postService.getPostIdsWithParams(this.route.snapshot.queryParamMap).subscribe(postIds => {
      this.postIds = postIds;
      this.numberOfPosts = postIds.length.toString() + ' posts';
      this.allPostsByIDsDisplay = this.displayAllPostsByID(this.postIds);
    });
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
