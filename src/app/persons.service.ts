import { Injectable } from '@angular/core';
import { People } from './people';

@Injectable({
  providedIn: 'root',
})
export class PersonsService {
  people: People[] = [];
  selectedPeople!: People;
  isEditing!: boolean;
  messages: string[] = [];

  addToAray(person: People): void {
    this.people.push(person);
  }

  addMessageToArray(message: string) {
    this.messages.push(message);
  }
  constructor() {}
}
