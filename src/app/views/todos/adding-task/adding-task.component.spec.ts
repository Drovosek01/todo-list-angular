import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingTaskComponent } from './adding-task.component';

describe('AddingTaskComponent', () => {
  let component: AddingTaskComponent;
  let fixture: ComponentFixture<AddingTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
