import { Component } from '@angular/core';

import { DisplayData } from 'src/app/interfaces/display-data';
import { Post } from 'src/app/models/post';
import { Tag } from 'src/app/models/tag';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  posts: number[] = [1, 2, 3, 4, 5]

  trendingTags: Array<DisplayData> = [
    {
      heading: '',
      type: 'tag',
      data: [
        {
          name: "java"
        },
        {
          name: "css"
        },
        {
          name: "python"
        },
        {
          name: "html"
        },
        {
          name: "kotlin"
        },
        {
          name: "php"
        }
      ],
    }
  ]

  trendingPosts: Array<DisplayData> = [
    {
      heading: '',
      type: 'post',
      data: [
        {
          title: "Post 1",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga provident aliquid quae cupiditate quod natus quas laboriosam repellendus! Exercitationem reiciendis ipsam assumenda quaerat deleniti? At repellendus nihil consequatur error!",
          tagNames: []
        },
        {
          title: "Post 2",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga provident aliquid quae cupiditate quod natus quas laboriosam repellendus! Exercitationem reiciendis ipsam assumenda quaerat deleniti? At repellendus nihil consequatur error!",
          tagNames: []
        },
        {
          title: "Post 3",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga provident aliquid quae cupiditate quod natus quas laboriosam repellendus! Exercitationem reiciendis ipsam assumenda quaerat deleniti? At repellendus nihil consequatur error!",
          tagNames: []
        },
        {
          title: "Post 4",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga provident aliquid quae cupiditate quod natus quas laboriosam repellendus! Exercitationem reiciendis ipsam assumenda quaerat deleniti? At repellendus nihil consequatur error!",
          tagNames: []
        },
        {
          title: "Post 5",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga provident aliquid quae cupiditate quod natus quas laboriosam repellendus! Exercitationem reiciendis ipsam assumenda quaerat deleniti? At repellendus nihil consequatur error!",
          tagNames: []
        },
        {
          title: "Post 6",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga provident aliquid quae cupiditate quod natus quas laboriosam repellendus! Exercitationem reiciendis ipsam assumenda quaerat deleniti? At repellendus nihil consequatur error!",
          tagNames: []
        },
        {
          title: "Post 7",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga provident aliquid quae cupiditate quod natus quas laboriosam repellendus! Exercitationem reiciendis ipsam assumenda quaerat deleniti? At repellendus nihil consequatur error!",
          tagNames: []
        },
        {
          title: "Post 8",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga provident aliquid quae cupiditate quod natus quas laboriosam repellendus! Exercitationem reiciendis ipsam assumenda quaerat deleniti? At repellendus nihil consequatur error!",
          tagNames: []
        },
        {
          title: "Post 9",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga provident aliquid quae cupiditate quod natus quas laboriosam repellendus! Exercitationem reiciendis ipsam assumenda quaerat deleniti? At repellendus nihil consequatur error!",
          tagNames: []
        },
        {
          title: "Post 10",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga provident aliquid quae cupiditate quod natus quas laboriosam repellendus! Exercitationem reiciendis ipsam assumenda quaerat deleniti? At repellendus nihil consequatur error!",
          tagNames: []
        }
      ]
    }
  ]

  popularTags: Array<DisplayData> = [
    {
      heading: 'Today',
      type: 'tag',
      data: [
        {
          name: "java"
        },
        {
          name: "css"
        }
      ]
    },
    {
      heading: 'Yesterday',
      type: 'tag',
      data: [
        {
          name: "python"
        },
        {
          name: "html"
        }
      ]
    },
    {
      heading: "This year",
      type: 'tag',
      data: [
        {
          name: "kotlin"
        },
        {
          name: "php"
        }
      ]
    }
  ]
}
