import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/interfaces/link';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  currentUser: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => this.currentUser = user);
  }

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
