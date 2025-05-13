import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialorderComponent } from './materialorder.component';

describe('MaterialorderComponent', () => {
  let component: MaterialorderComponent;
  let fixture: ComponentFixture<MaterialorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
