import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsAdComponent } from './rooms-ad.component';

describe('RoomsAdComponent', () => {
  let component: RoomsAdComponent;
  let fixture: ComponentFixture<RoomsAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomsAdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomsAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
