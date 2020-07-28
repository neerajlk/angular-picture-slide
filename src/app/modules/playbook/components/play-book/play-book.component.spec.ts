import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayBookComponent } from './play-book.component';

describe('PlayBookComponent', () => {
  let component: PlayBookComponent;
  let fixture: ComponentFixture<PlayBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
