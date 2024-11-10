import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {IfAuthenticatedDirective} from "../../../../core/directive/auth/if-authenticated.directive";
import {NotAuthenticatedDirective} from '../../../../core/directive/auth/not-authenticated.directive';

@Component({
  selector: 'tux-top-bar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    IfAuthenticatedDirective,
    NotAuthenticatedDirective
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {

}
