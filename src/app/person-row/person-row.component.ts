import { PersonsService } from './../persons.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { People } from '../people';

@Component({
  selector: 'app-person-row',
  templateUrl: './person-row.component.html',
  styleUrls: ['./person-row.component.scss'],
})
export class PersonRowComponent {
  @Input() person!: People;
  @Input() index!: number;

  @Output() deletePerson: EventEmitter<People> = new EventEmitter();

  isDescriptionShown: boolean = false;

  constructor(private personsService: PersonsService) {}

  delete(person: People): void {
    this.personsService.addMessageToArray('User deleted');
    this.deletePerson.emit(person);
  }

  edit(person: People): void {
    this.personsService.selectedPeople = person;
    this.personsService.isEditing = true;
  }

  showDescription(): void {
    this.isDescriptionShown = !this.isDescriptionShown;
  }
}
