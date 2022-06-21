import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoannComponent } from './loann.component';

describe('LoannComponent', () => {
  let component: LoannComponent;
  let fixture: ComponentFixture<LoannComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoannComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoannComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
