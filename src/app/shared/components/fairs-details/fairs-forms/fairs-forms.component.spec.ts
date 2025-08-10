import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairsFormsComponent } from './fairs-forms.component';

describe('FairsFormsComponent', () => {
  let component: FairsFormsComponent;
  let fixture: ComponentFixture<FairsFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairsFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
