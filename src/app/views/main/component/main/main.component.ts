import { Component } from '@angular/core';
import {TopBarComponent} from '../top-bar/top-bar.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'tux-main',
  standalone: true,
  imports: [
    TopBarComponent,
    FooterComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
