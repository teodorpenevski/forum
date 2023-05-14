import { Component } from '@angular/core';
import { PostService } from "../../services/post.service";

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent {
  postIds: number[] = [];
  isExpanded = false;
  sortAttribute = 'created';
  constructor(private service: PostService) { }

  ngOnInit() {
    this.getPostIds();
  }

  getPostIds() {
    return this.service.getPostIds().subscribe(postIds => this.postIds = postIds);
  }

  sort(attribute: string) {
    this.sortAttribute = attribute;
  }


}
