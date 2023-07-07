import { Component } from '@angular/core';
import { PersonsService } from '../persons.service';
import { People } from '../people';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  error: string = '';
  isDisabled: boolean = true;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  description: string = '';
  isEditing: boolean;
  actionsArray!: string[];

  onSaveChanges(): void {
    if (this.personsService.selectedPeople && this.personsService.isEditing) {
      this.personsService.selectedPeople.firstName = this.firstName;
      this.personsService.selectedPeople.lastName = this.lastName;
      this.personsService.selectedPeople.email = this.email;
      this.personsService.selectedPeople.description = this.description;
      this.personsService.isEditing = false;
    } else {
      if (
        this.firstName === '' ||
        this.lastName === '' ||
        this.email === '' ||
        this.description === ''
      ) {
        this.error = 'Please complete all the required fields';
        return;
      }
      this.personsService.addToAray({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        description: this.description,
      });

      this.actionsArray = this.personsService.addActionToArray();
    }

    this.error = '';
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.description = '';

    this.isDisabled = true;
  }

  checkInputs() {
    if (
      this.firstName !== '' &&
      this.lastName !== '' &&
      this.email !== '' &&
      this.description !== ''
    ) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  constructor(private personsService: PersonsService) {
    this.isEditing = this.personsService.isEditing;
  }
}
