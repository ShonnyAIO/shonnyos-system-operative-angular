import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardBrightnessControlComponent } from './keyboard-brightness-control.component';

describe('KeyboardBrightnessControlComponent', () => {
  let component: KeyboardBrightnessControlComponent;
  let fixture: ComponentFixture<KeyboardBrightnessControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyboardBrightnessControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardBrightnessControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
