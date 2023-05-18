import { Component, OnInit } from '@angular/core';

import { Link } from 'src/app/interfaces/link';
import { AuthService } from 'src/app/services/auth.service';
import { UpdateService } from 'src/app/services/update.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  currentUser: string = '';

  constructor(private updateService: UpdateService) { }

  ngOnInit(): void {
    this.updateService.getValue().subscribe(newValue => this.currentUser = newValue);
  }

  sideNavLinks: Link[] = [
    {
      name: 'Explore',
      path: '/',
      icon: './assets/icons/earth-americas-solid.svg'
    },
    {
      name: 'Followed',
      path: `/users/${this.currentUser}`,
      icon: './assets/icons/thumbtack-solid.svg'
    },
    {
      name: 'Saved',
      path: `/users/${this.currentUser}`,
      icon: './assets/icons/bookmark-solid.svg'
    }
  ]

}
