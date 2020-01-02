import { TestBed } from '@angular/core/testing';

import { FormConfigurationService } from './form-configuration.service';

describe('FormConfigurationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormConfigurationService = TestBed.get(FormConfigurationService);
    expect(service).toBeTruthy();
  });
});
