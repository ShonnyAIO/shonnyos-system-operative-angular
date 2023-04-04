import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirdropControlComponent } from './airdrop-control.component';

describe('AirdropControlComponent', () => {
  let component: AirdropControlComponent;
  let fixture: ComponentFixture<AirdropControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirdropControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirdropControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
