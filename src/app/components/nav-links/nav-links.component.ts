import { Component, Input } from '@angular/core';

import { Link } from 'src/app/interfaces/link';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.css']
})
export class NavLinksComponent {

  @Input() navLinks: Link[] = [];

  @Input() type: String = "inline";
}
