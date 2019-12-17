import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmMocalLoggingComponent } from './frm-mocal-logging.component';

describe('FrmMocalLoggingComponent', () => {
  let component: FrmMocalLoggingComponent;
  let fixture: ComponentFixture<FrmMocalLoggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrmMocalLoggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmMocalLoggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
