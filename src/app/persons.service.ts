import { Injectable } from '@angular/core';
import { People } from './people';

@Injectable({
  providedIn: 'root',
})
export class PersonsService {
  people: People[] = [];
  selectedPeople!: People;
  isEditing!: boolean;
  actions: string[] = [];

  addToAray(person: People): void {
    this.people.push(person);
  }

  addActionToArray(): any {
    this.actions.push('A person have been added');
  }
  constructor() {}
}
