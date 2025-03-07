import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageItemComponent } from './voyage-item.component';

describe('VoyageItemComponent', () => {
  let component: VoyageItemComponent;
  let fixture: ComponentFixture<VoyageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoyageItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoyageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
