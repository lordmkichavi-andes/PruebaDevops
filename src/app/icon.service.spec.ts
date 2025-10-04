import { TestBed } from '@angular/core/testing';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconService } from './icon.service';

describe('IconService', () => {
  let service: IconService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        IconService,
        { provide: MatIconRegistry, useValue: jasmine.createSpyObj('MatIconRegistry', ['addSvgIcon']) },
        { provide: DomSanitizer, useValue: jasmine.createSpyObj('DomSanitizer', ['bypassSecurityTrustResourceUrl']) }
      ]
    });
    service = TestBed.inject(IconService);
  });

  it('debería crear el servicio', () => {
    expect(service).toBeTruthy();
  });
});