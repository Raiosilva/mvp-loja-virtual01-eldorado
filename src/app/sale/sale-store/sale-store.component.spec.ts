import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesService } from '../sales.service';
import { SaleStoreComponent } from './sale-store.component';

describe('SaleStoreComponent', () => {
  let component: SaleStoreComponent;
  let fixture: ComponentFixture<SaleStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleStoreComponent ],
      providers: [SalesService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
