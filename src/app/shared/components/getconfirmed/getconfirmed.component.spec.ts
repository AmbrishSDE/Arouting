import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetconfirmedComponent } from './getconfirmed.component';

describe('GetconfirmedComponent', () => {
  let component: GetconfirmedComponent;
  let fixture: ComponentFixture<GetconfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetconfirmedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetconfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
