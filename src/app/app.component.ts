import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MainComponent} from './views/main/component/main/main.component';

@Component({
  selector: 'tux-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
