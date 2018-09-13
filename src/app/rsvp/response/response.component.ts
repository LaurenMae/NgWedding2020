import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import * as _ from 'lodash';

interface User {
  invitationId: string;
  name: string;
  RSVP: Array<RSVP>;
  dietaryRequirements: DietaryRequirements;
  foodAllergies: string;
  songRequest: string;
}

interface DietaryRequirements {
  dairyFree: boolean;
  glutenFree: boolean;
  vegetarian: boolean;
  vegan: boolean;
}

interface RSVP { 
  value: boolean;
  display: string;
}

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {
  invitationId: string;
  users: Array<User>;
  tableKeys: Array<string>;
  profileForms: Array<FormGroup> = [];

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.params;
    this.invitationId = routeParams.invitationId;
    this.userService.getUser(this.invitationId).subscribe((users: Array<User>) => {
      this.users = users;
      this.users.forEach(user => {
        this.createProfileForm(user);
      });
      this.tableKeys = Object.keys(users[0]);
    })
  }

  createProfileForm(user: User): void {
    this.profileForms.push(new FormGroup({
      name: new FormControl(user.name),
      RSVP: new FormControl(user.RSVP),
      dietaryRequirements: new FormControl(user.dietaryRequirements),
      foodAllergies: new FormControl(user.foodAllergies),
      songRequest: new FormControl(user.songRequest)
    }));
  }

  onSubmit() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    let formData = _.map(this.profileForms, 'value');
    console.log(formData);
    // todo - write to DB

    this.userService.sendRsvp(this.invitationId, formData, httpOptions).subscribe((profileForms: Array<FormGroup>) => {
      console.log(profileForms);
    });
  }
}
