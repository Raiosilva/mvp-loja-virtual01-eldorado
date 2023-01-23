import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SalesService } from './sales.service';

const mockData = {
  api: 'https://dummyjson.com/products?limit=10&skip=10',
  products: [
      {
        id: 1,
        description: 'example 1',
        thumbnail: ''
      },
      {
        id: 2,
        description: 'example 2',
        thumbnail: ''
      }
  ]
};

describe(SalesService.name, () => {
  let service: SalesService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SalesService]
    });
    service = TestBed.inject(SalesService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpController.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${SalesService.prototype.getProducts.name} should return
    products list`, done => {

    service.getProducts().subscribe(products => {
      expect(products[0].description).toBe('EXAMPLE 1');
      expect(products[1].description).toBe('EXAMPLE 2');
      done();
    });

    httpController
      .expectOne(mockData.api)
      .flush(mockData.products);
  });

  it(`#${SalesService.prototype.getProducts.name} should return
    products details`, done => {

    service.getProductsById(1).subscribe(product => {
      expect(product.description).toBe('EXAMPLE 1');
      done();
    });

    httpController
      .expectOne(mockData.api)
      .flush(mockData.products);
  });
});
