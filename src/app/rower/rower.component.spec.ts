import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowerComponent } from './rower.component';

describe('RowerComponent', () => {
  let component: RowerComponent;
  let fixture: ComponentFixture<RowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
