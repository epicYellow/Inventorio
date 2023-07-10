import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapmodalComponent } from './mapmodal.component';

describe('MapmodalComponent', () => {
  let component: MapmodalComponent;
  let fixture: ComponentFixture<MapmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
