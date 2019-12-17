import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocFormulaireComponent } from './poc-formulaire.component';

describe('PocFormulaireComponent', () => {
  let component: PocFormulaireComponent;
  let fixture: ComponentFixture<PocFormulaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocFormulaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
