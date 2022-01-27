import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorseLogHistoryComponent } from './morse-log-history.component';

describe('MorseLogHistoryComponent', () => {
  let component: MorseLogHistoryComponent;
  let fixture: ComponentFixture<MorseLogHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorseLogHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MorseLogHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
