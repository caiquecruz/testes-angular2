import { TestBed, inject } from '@angular/core/testing';

import { ContatosDatabaseService } from './contatos-database.service';

describe('ContatosDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContatosDatabaseService]
    });
  });

  it('should be created', inject([ContatosDatabaseService], (service: ContatosDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
