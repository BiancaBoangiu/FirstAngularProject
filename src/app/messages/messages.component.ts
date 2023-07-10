import { Component } from '@angular/core';
import { PersonsService } from '../persons.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent {
  messages!: string[];
  constructor(private personsService: PersonsService) {
    this.messages = this.personsService.messages;
  }
}
