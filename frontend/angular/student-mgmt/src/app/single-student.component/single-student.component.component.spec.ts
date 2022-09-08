import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleStudentComponentComponent } from './single-student.component.component';

describe('SingleStudentComponentComponent', () => {
  let component: SingleStudentComponentComponent;
  let fixture: ComponentFixture<SingleStudentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleStudentComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleStudentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
