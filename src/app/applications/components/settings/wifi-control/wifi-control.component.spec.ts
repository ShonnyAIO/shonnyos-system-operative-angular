import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiControlComponent } from './wifi-control.component';

describe('WifiControlComponent', () => {
  let component: WifiControlComponent;
  let fixture: ComponentFixture<WifiControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WifiControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WifiControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
