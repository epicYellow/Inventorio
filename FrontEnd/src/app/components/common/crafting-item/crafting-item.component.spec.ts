import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftingItemComponent } from './crafting-item.component';

describe('CraftingItemComponent', () => {
  let component: CraftingItemComponent;
  let fixture: ComponentFixture<CraftingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CraftingItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CraftingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
