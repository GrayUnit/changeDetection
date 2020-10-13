import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonyImageComponent } from './pony-image.component';

describe('PonyImageComponent', () => {
  let component: PonyImageComponent;
  let fixture: ComponentFixture<PonyImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PonyImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PonyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
