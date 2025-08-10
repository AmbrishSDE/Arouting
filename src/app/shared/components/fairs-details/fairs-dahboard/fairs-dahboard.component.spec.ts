import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairsDahboardComponent } from './fairs-dahboard.component';

describe('FairsDahboardComponent', () => {
  let component: FairsDahboardComponent;
  let fixture: ComponentFixture<FairsDahboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairsDahboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairsDahboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
