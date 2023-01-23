import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesService } from '../sales.service';
import { SalesDetailsComponent } from './sales-details.component';

describe('SalesDetailsComponent', () => {
  let component: SalesDetailsComponent;
  let fixture: ComponentFixture<SalesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesDetailsComponent ],
      providers: [SalesService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
