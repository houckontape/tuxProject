import { Component } from '@angular/core';
import {TopBarComponent} from '../top-bar/top-bar.component';
import {FooterComponent} from '../footer/footer.component';
import {RouterOutlet} from '@angular/router';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {DashboardComponent} from '../../../dashboard/component/dashboard/dashboard.component';

@Component({
  selector: 'tux-main',
  standalone: true,
  imports: [
    TopBarComponent,
    FooterComponent,
    RouterOutlet,
    SidebarComponent,
    DashboardComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
