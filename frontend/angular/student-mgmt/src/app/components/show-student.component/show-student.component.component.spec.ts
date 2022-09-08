import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStudentComponentComponent } from './show-student.component.component';

describe('ShowStudentComponentComponent', () => {
  let component: ShowStudentComponentComponent;
  let fixture: ComponentFixture<ShowStudentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowStudentComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowStudentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
