import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlaBlaComponent } from './form-bla-bla.component';

describe('FormBlaBlaComponent', () => {
  let component: FormBlaBlaComponent;
  let fixture: ComponentFixture<FormBlaBlaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBlaBlaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBlaBlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
