import { Component } from '@angular/core';
import { Link } from 'src/app/interfaces/link';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  mainNavLinks: Link[] = [
    {
      name: 'Home',
      path: '/',
      icon: ''
    },
    {
      name: 'Tags',
      path: '/tags',
      icon: ''
    },
    {
      name: 'Posts',
      path: '/posts',
      icon: ''
    }
  ]
}
