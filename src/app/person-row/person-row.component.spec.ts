import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonRowComponent } from './person-row.component';

describe('PersonRowComponent', () => {
  let component: PersonRowComponent;
  let fixture: ComponentFixture<PersonRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonRowComponent]
    });
    fixture = TestBed.createComponent(PersonRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
