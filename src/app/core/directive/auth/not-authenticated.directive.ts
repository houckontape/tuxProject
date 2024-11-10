import {Directive, inject, OnInit} from '@angular/core';
import {AuthenticationService} from '../../service/auth/authentication.service';
import {NgIf} from '@angular/common';

@Directive({
  hostDirectives:[{directive: NgIf}],
  selector: '[tuxNotAuthenticated]',
  standalone: true
})
export class NotAuthenticatedDirective implements OnInit{
  private isAuthenticated: boolean = inject(AuthenticationService).isAuthenticated;
  private ngIfDirective=inject(NgIf);
  ngOnInit():void{
    if(this.isAuthenticated){
      this.ngIfDirective.ngIf=false;
    }else{
      this.ngIfDirective.ngIf=true;
    }

  }
  constructor() { }

}
