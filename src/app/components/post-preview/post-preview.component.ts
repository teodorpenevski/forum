import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent {

  @Input() postInfo: Post = {
    type: 'post',
    heading: "Post",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, sed perferendis ratione animi cum hic libero, illo, praesentium accusantium sunt veniam. Ullam, cumque repudiandae. Corrupti maxime error earum nihil sapiente."
  }

}
