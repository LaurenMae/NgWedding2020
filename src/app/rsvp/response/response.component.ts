import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { ObjectId } from 'mongodb';
import { catchError, tap } from 'rxjs/operators';
import * as _ from 'lodash';
import { TextAttribute } from '@angular/compiler/src/render3/r3_ast';

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
      name: user.name ? new FormControl(user.name) : new FormControl(''),
      RSVP: user.RSVP ? new FormControl(user.RSVP) : new FormControl(''),
      dietaryRequirements: user.dietaryRequirements ? new FormControl(user.dietaryRequirements) : new FormControl(''),
      foodAllergies: user.foodAllergies ? new FormControl(user.foodAllergies) : new FormControl(''),
      songRequest: user.songRequest ? new FormControl(user.songRequest) : new FormControl(''),
      guest: user.name ? new FormControl(false) : new FormControl(true)
    }));
  }

  getForm(user): FormGroup {
    var form: FormGroup = _.find(this.profileForms, function(form: FormGroup) {
      return form.controls.name.value === user.name;
    });

    if (form) {
      return form;
    }

    return _.find(this.profileForms, function(form: FormGroup) {
      return form.controls.guest && form.controls.guest.value === true;
    });
    
  }

  onSubmit() {
    // TODO - disable button and load spinner

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    let formData = _.map(this.profileForms, 'value');

    console.log(formData);

    this.userService.sendRsvp(this.invitationId, formData, httpOptions)
                    .subscribe((err: Error) => {
                      if(err) {
                        throw new Error(err.message);
                      } else {
                        alert("RSVP successfully saved");
                      }
                    }); // TODO - handle error in saving
  }

  // TODO - handle leaving the page before saving
}
