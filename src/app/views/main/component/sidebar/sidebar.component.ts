import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {IfAuthenticatedDirective} from '../../../../core/directive/auth/if-authenticated.directive';

@Component({
  selector: 'tux-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    IfAuthenticatedDirective,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  nameProject = 'TuxFarm';
  version = '1.0.0';
}
