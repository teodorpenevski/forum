import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  posts: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

}
