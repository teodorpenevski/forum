import { Component } from '@angular/core';
import { DisplayData } from 'src/app/interfaces/display-data';

@Component({
  selector: 'app-tags-page',
  templateUrl: './tags-page.component.html',
  styleUrls: ['./tags-page.component.css']
})
export class TagsPageComponent {

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
      ]
    }
  ]

}
