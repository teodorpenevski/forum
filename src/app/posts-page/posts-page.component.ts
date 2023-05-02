import {Component} from '@angular/core';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent {
  posts = [
    {
    }
    ];
  isExpanded = false;
  sortAttribute = 'created';
  constructor() { }

  ngOnInit() {

  }

  createPost() {
    this.posts.push({});
  }

  sort(attribute: string) {
    this.sortAttribute = attribute;
  }


}
