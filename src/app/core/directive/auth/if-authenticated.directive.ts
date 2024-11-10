import {Directive, inject, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';
import {AuthenticationService} from '../../service/auth/authentication.service';

@Directive({
  hostDirectives:[{directive: NgIf}],
  selector: '[tuxIfAuthenticated]',
  standalone: true
})
export class IfAuthenticatedDirective implements OnInit{
  private isAuthenticated: boolean = inject(AuthenticationService).isAuthenticated;
  private ngIfDirective=inject(NgIf);
  ngOnInit():void{
    this.ngIfDirective.ngIf=this.isAuthenticated;
  }

}
