import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenMirroringControlComponent } from './screen-mirroring-control.component';

describe('ScreenMirroringControlComponent', () => {
  let component: ScreenMirroringControlComponent;
  let fixture: ComponentFixture<ScreenMirroringControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenMirroringControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenMirroringControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
