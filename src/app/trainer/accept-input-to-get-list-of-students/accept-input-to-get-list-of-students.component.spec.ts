import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptInputToGetListOfStudentsComponent } from './accept-input-to-get-list-of-students.component';

describe('AcceptInputToGetListOfStudentsComponent', () => {
  let component: AcceptInputToGetListOfStudentsComponent;
  let fixture: ComponentFixture<AcceptInputToGetListOfStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptInputToGetListOfStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptInputToGetListOfStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
