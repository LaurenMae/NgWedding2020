import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

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

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User;

  constructor(private http: HttpClient) { }

  getUser(invitationId: string): Observable<Object> {
    return this.http.get('/user/' + invitationId);
  }

  sendRsvp(invitationId: string, body: Array<FormGroup>, options: Object): Observable<Object> {
    return this.http.post('/sendrsvp/' + invitationId, body, options);
  }
}
