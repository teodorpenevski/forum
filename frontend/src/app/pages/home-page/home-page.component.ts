import { Component } from '@angular/core';

import { Tag } from 'src/app/models/tag';
import { Post } from 'src/app/models/post';
import { DisplayData } from 'src/app/interfaces/display-data';
import { TagService } from 'src/app/services/tag.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  apiTags: Tag[] = [];
  apiPostIDs: number[] = [];

  allTagsDisplay: Array<DisplayData> = [];
  popularTagsDisplay: Array<DisplayData> = [];
  allPostsByIDsDisplay: Array<DisplayData> = [];

  constructor(private tagService: TagService, private postService: PostService) { }

  ngOnInit() {
    this.getTagsFromApi();
    this.getPostIDsFromApi();
  }

  getTagsFromApi() {
    this.tagService.getTags().subscribe(tags => {
      this.apiTags = tags;
      this.allTagsDisplay = this.displayAllTags(this.apiTags);
      this.popularTagsDisplay = this.displayPopularTags(this.apiTags);
    });
  }

  getPostIDsFromApi() {
    this.postService.getPostIds().subscribe(postIDs => {
      this.apiPostIDs = postIDs;
      this.allPostsByIDsDisplay = this.displayAllPostsByID(this.apiPostIDs);
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

  displayPopularTags(allTags: Tag[]): Array<DisplayData> {
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

    for (let tag of allTags) {
      displayTags[0].data.push(tag);
      displayTags[1].data.push(tag);
      displayTags[2].data.push(tag);
    }

    return displayTags;
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





  // trendingTags: Array<DisplayData> = [
  //   {
  //     heading: '',
  //     type: 'tag',
  //     data: [
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       },
  //       {
  //         name: "."
  //       }
  //     ],
  //   }
  // ]

  // trendingPosts: Array<DisplayData> = [
  //   {
  //     heading: '',
  //     type: 'post',
  //     data: [
  //       {
  //         title: "Post 1",
  //         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga provident aliquid quae cupiditate quod natus quas laboriosam repellendus! Exercitationem reiciendis ipsam assumenda quaerat deleniti? At repellendus nihil consequatur error!",
  //         tagNames: []
  //       },
  //       {
  //         title: "Post 2",
  //         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga provident aliquid quae cupiditate quod natus quas laboriosam repellendus! Exercitationem reiciendis ipsam assumenda quaerat deleniti? At repellendus nihil consequatur error!",
  //         tagNames: []
  //       },
  //       {
  //         title: "Post 3",
  //         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga provident aliquid quae cupiditate quod natus quas laboriosam repellendus! Exercitationem reiciendis ipsam assumenda quaerat deleniti? At repellendus nihil consequatur error!",
  //         tagNames: []
  //       },
  //       {
  //         title: "Post 4",
  //         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga provident aliquid quae cupiditate quod natus quas laboriosam repellendus! Exercitationem reiciendis ipsam assumenda quaerat deleniti? At repellendus nihil consequatur error!",
  //         tagNames: []
  //       },
  //       {
  //         title: "Post 5",
  //         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga provident aliquid quae cupiditate quod natus quas laboriosam repellendus! Exercitationem reiciendis ipsam assumenda quaerat deleniti? At repellendus nihil consequatur error!",
  //         tagNames: []
  //       },
  //       {
  //         title: "Post 6",
  //         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga provident aliquid quae cupiditate quod natus quas laboriosam repellendus! Exercitationem reiciendis ipsam assumenda quaerat deleniti? At repellendus nihil consequatur error!",
  //         tagNames: []
  //       },
  //       {
  //         title: "Post 7",
  //         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga provident aliquid quae cupiditate quod natus quas laboriosam repellendus! Exercitationem reiciendis ipsam assumenda quaerat deleniti? At repellendus nihil consequatur error!",
  //         tagNames: []
  //       },
  //       {
  //         title: "Post 8",
  //         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga provident aliquid quae cupiditate quod natus quas laboriosam repellendus! Exercitationem reiciendis ipsam assumenda quaerat deleniti? At repellendus nihil consequatur error!",
  //         tagNames: []
  //       },
  //       {
  //         title: "Post 9",
  //         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga provident aliquid quae cupiditate quod natus quas laboriosam repellendus! Exercitationem reiciendis ipsam assumenda quaerat deleniti? At repellendus nihil consequatur error!",
  //         tagNames: []
  //       },
  //       {
  //         title: "Post 10",
  //         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga provident aliquid quae cupiditate quod natus quas laboriosam repellendus! Exercitationem reiciendis ipsam assumenda quaerat deleniti? At repellendus nihil consequatur error!",
  //         tagNames: []
  //       }
  //     ]
  //   }
  // ]

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
    },
    {
      heading: "test",
      type: 'tag',
      data: [
        {
          name: "."
        },
        {
          name: "."
        },
        {
          name: "."
        },
        {
          name: "."
        },
        {
          name: "."
        },
        {
          name: "."
        },
        {
          name: "."
        },
        {
          name: "."
        },
        {
          name: "."
        }
      ]
    }
  ]
}
