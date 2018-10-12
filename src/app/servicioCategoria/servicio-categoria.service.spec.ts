import { TestBed, inject } from '@angular/core/testing';

import { ServicioCategoriaService } from './servicio-categoria.service';

describe('ServicioCategoriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioCategoriaService]
    });
  });

  it('should be created', inject([ServicioCategoriaService], (service: ServicioCategoriaService) => {
    expect(service).toBeTruthy();
  }));
});
