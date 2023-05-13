import { Component } from '@angular/core';
import { DisplayData } from 'src/app/models/display-data';

@Component({
  selector: 'app-tags-page',
  templateUrl: './tags-page.component.html',
  styleUrls: ['./tags-page.component.css']
})
export class TagsPageComponent {

  trendingTags: Array<DisplayData> = [
    {
      heading: '',
      data: [
        {
          type: 'tag',
          name: "java"
        },
        {
          type: 'tag',
          name: "css"
        },
        {
          type: 'tag',
          name: "python"
        }, {
          type: 'tag',
          name: "html"
        },
        {
          type: 'tag',
          name: "kotlin"
        },
        {
          type: 'tag',
          name: "php"
        }
      ]
    }
  ]

}
