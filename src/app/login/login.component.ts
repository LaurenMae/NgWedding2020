import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

interface User {
  invitationId: string;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() title: string;
  @Input() button: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  login(inviteId: string): void {
    this.loginService.login(inviteId).subscribe((user: User) => {
      if (user.firstName && user.lastName) {
        this.displayResponsePage(user);
      } else {
        console.log('error, user not found'); // TODO
      }
    });
  }

  private displayResponsePage(user): void {
    this.router.navigate(['RSVP/'+ user.invitationId]); // TODO - encode Id?
  }
}
