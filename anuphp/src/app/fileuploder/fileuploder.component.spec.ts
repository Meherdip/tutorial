import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileuploderComponent } from './fileuploder.component';

describe('FileuploderComponent', () => {
  let component: FileuploderComponent;
  let fixture: ComponentFixture<FileuploderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileuploderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileuploderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
