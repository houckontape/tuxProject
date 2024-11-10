import { Component } from '@angular/core';

@Component({
  selector: 'tux-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
serveurs=[
  {
    id: 1,
    name: 'tux1',
    ip: '192.168.1.1',
    status: 'online',
    mysqlState: 1,
    apacheState:1,
    charge: 25,
    loadOverage: 1.5,
    active:1
  },
  {
    id:2,
    name: 'tux2',
    ip: '192.168.1.1',
    status: 'down',
    mysqlState: 0,
    apacheState: 0,
    charge: 80,
    loadOverage: 0,
    active:0
  }
]
}
