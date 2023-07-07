import { Component, OnInit } from '@angular/core';
import { People } from '../people';
import { PersonsService } from '../persons.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  people!: People[];

  constructor(private personsService: PersonsService) {}

  ngOnInit(): void {
    this.people = this.personsService.people;
  }

  onDeleteClick(person: People): void {
    const index = this.people.indexOf(person);
    this.people.splice(index, 1);
  }
}
