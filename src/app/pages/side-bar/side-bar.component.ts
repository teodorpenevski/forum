import { Component } from '@angular/core';
import { Link } from 'src/app/interfaces/link';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  sideNavLinks: Link[] = [
    {
      name: 'Explore',
      path: '/',
      icon: './assets/icons/earth-americas-solid.svg'
    },
    {
      name: 'Followed',
      path: '/user/followed',
      icon: './assets/icons/thumbtack-solid.svg'
    },
    {
      name: 'Saved',
      path: '/user/saved',
      icon: './assets/icons/bookmark-solid.svg'
    }
  ]

}
