import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinderSidebarComponent } from './finder-sidebar.component';

describe('FinderSidebarComponent', () => {
  let component: FinderSidebarComponent;
  let fixture: ComponentFixture<FinderSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinderSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinderSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
