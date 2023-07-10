import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftingReqComponent } from './crafting-req.component';

describe('CraftingReqComponent', () => {
  let component: CraftingReqComponent;
  let fixture: ComponentFixture<CraftingReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CraftingReqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CraftingReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
