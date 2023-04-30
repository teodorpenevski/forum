import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { Tag } from 'src/app/models/tag';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  posts: number[] = [1, 2, 3, 4, 5]

  trendingTags: Tag[] = [
    {
      type: 'tag',
      name: "tag1"
    },
    {
      type: 'tag',
      name: "tag2"
    },
    {
      type: 'tag',
      name: "tag3"
    },
    {
      type: 'tag',
      name: "tag4"
    },
    {
      type: 'tag',
      name: "tag5"
    }
  ]

  trendingPosts: Post[] = [
    {
      type: 'post',
      heading: "Post 1",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga provident aliquid quae cupiditate quod natus quas laboriosam repellendus! Exercitationem reiciendis ipsam assumenda quaerat deleniti? At repellendus nihil consequatur error!"
    },
    {
      type: 'post',
      heading: "Post 2",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga provident aliquid quae cupiditate quod natus quas laboriosam repellendus! Exercitationem reiciendis ipsam assumenda quaerat deleniti? At repellendus nihil consequatur error!"
    },
    {
      type: 'post',
      heading: "Post 3",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga provident aliquid quae cupiditate quod natus quas laboriosam repellendus! Exercitationem reiciendis ipsam assumenda quaerat deleniti? At repellendus nihil consequatur error!"
    },
    {
      type: 'post',
      heading: "Post 4",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga provident aliquid quae cupiditate quod natus quas laboriosam repellendus! Exercitationem reiciendis ipsam assumenda quaerat deleniti? At repellendus nihil consequatur error!"
    },
    {
      type: 'post',
      heading: "Post 5",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga provident aliquid quae cupiditate quod natus quas laboriosam repellendus! Exercitationem reiciendis ipsam assumenda quaerat deleniti? At repellendus nihil consequatur error!"
    }
  ]

}
