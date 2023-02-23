import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLabelComponent } from './my-label.component';

describe('MyLabelComponent', () => {
  let component: MyLabelComponent;
  let fixture: ComponentFixture<MyLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
