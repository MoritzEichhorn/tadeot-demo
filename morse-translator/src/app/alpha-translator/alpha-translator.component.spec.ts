import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaTranslatorComponent } from './alpha-translator.component';

describe('AlphaTranslatorComponent', () => {
  let component: AlphaTranslatorComponent;
  let fixture: ComponentFixture<AlphaTranslatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphaTranslatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphaTranslatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
