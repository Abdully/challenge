import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListregisterComponent } from './listregister.component';

describe('ListregisterComponent', () => {
  let component: ListregisterComponent;
  let fixture: ComponentFixture<ListregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
