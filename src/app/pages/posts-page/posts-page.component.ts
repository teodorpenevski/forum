import { Component } from '@angular/core';
import { PostService } from "../../services/post.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent {
  postIds: number[] = [];
  isExpanded = false;
  constructor(private route: ActivatedRoute,
              private service: PostService) { }

  ngOnInit() {
    this.getPostIds();
  }

  getPostIds() {
    return this.service.getPostIdsWithParams(this.route.snapshot.queryParamMap).subscribe(postIds => this.postIds = postIds);
  }
}
