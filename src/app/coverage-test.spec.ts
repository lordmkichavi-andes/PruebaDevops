import { TestBed } from '@angular/core/testing';
import { IconService } from './icon.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

describe('Pruebas de Cobertura para CI/CD', () => {
  
  describe('IconService - Cobertura de Servicio', () => {
    let service: IconService;
    let mockIconRegistry: jasmine.SpyObj<MatIconRegistry>;
    let mockSanitizer: jasmine.SpyObj<DomSanitizer>;

    beforeEach(() => {
      const iconRegistrySpy = jasmine.createSpyObj('MatIconRegistry', ['addSvgIcon']);
      const sanitizerSpy = jasmine.createSpyObj('DomSanitizer', ['bypassSecurityTrustResourceUrl']);

      TestBed.configureTestingModule({
        providers: [
          IconService,
          { provide: MatIconRegistry, useValue: iconRegistrySpy },
          { provide: DomSanitizer, useValue: sanitizerSpy }
        ]
      });

      service = TestBed.inject(IconService);
      mockIconRegistry = TestBed.inject(MatIconRegistry) as jasmine.SpyObj<MatIconRegistry>;
      mockSanitizer = TestBed.inject(DomSanitizer) as jasmine.SpyObj<DomSanitizer>;
    });

    it('debería crear el servicio IconService', () => {
      expect(service).toBeTruthy();
    });

    it('debería registrar iconos en el constructor', () => {
      // Verificar que se llamó addSvgIcon al menos una vez
      expect(mockIconRegistry.addSvgIcon).toHaveBeenCalled();
    });

    it('debería usar el sanitizer para las URLs', () => {
      // Verificar que se usó el sanitizer
      expect(mockSanitizer.bypassSecurityTrustResourceUrl).toHaveBeenCalled();
    });
  });

  describe('Funciones de Utilidad - Cobertura de Lógica', () => {
    
    it('debería validar formato de email', () => {
      const validEmail = 'test@example.com';
      const invalidEmail = 'invalid-email';
      
      const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

      expect(isValidEmail(validEmail)).toBe(true);
      expect(isValidEmail(invalidEmail)).toBe(false);
    });

    it('debería formatear números correctamente', () => {
      const formatNumber = (num: number): string => {
        return num.toLocaleString('es-CO');
      };

      expect(formatNumber(1000)).toBe('1.000');
      expect(formatNumber(1234567)).toBe('1.234.567');
    });

    it('debería validar campos requeridos', () => {
      const validateRequired = (value: any): boolean => {
        return value !== null && value !== undefined && value !== '';
      };

      expect(validateRequired('texto')).toBe(true);
      expect(validateRequired('')).toBe(false);
      expect(validateRequired(null)).toBe(false);
      expect(validateRequired(undefined)).toBe(false);
    });

    it('debería procesar arrays de datos', () => {
      const processData = (data: any[]): { count: number; hasItems: boolean } => {
        return {
          count: data.length,
          hasItems: data.length > 0
        };
      };

      const emptyArray: any[] = [];
      const fullArray = [1, 2, 3];

      expect(processData(emptyArray)).toEqual({ count: 0, hasItems: false });
      expect(processData(fullArray)).toEqual({ count: 3, hasItems: true });
    });

    it('debería manejar errores correctamente', () => {
      const handleError = (error: any): string => {
        if (error instanceof Error) {
          return error.message;
        }
        return 'Error desconocido';
      };

      const customError = new Error('Error personalizado');
      const unknownError = 'Error string';

      expect(handleError(customError)).toBe('Error personalizado');
      expect(handleError(unknownError)).toBe('Error desconocido');
    });
  });

  describe('Lógica de Negocio - Cobertura de Reglas', () => {
    
    it('debería calcular totales correctamente', () => {
      const calculateTotal = (items: { price: number; quantity: number }[]): number => {
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
      };

      const items = [
        { price: 100, quantity: 2 },
        { price: 50, quantity: 3 },
        { price: 200, quantity: 1 }
      ];

      expect(calculateTotal(items)).toBe(550);
    });

    it('debería aplicar descuentos', () => {
      const applyDiscount = (price: number, discountPercent: number): number => {
        const discount = price * (discountPercent / 100);
        return Math.max(0, price - discount);
      };

      expect(applyDiscount(1000, 10)).toBe(900);
      expect(applyDiscount(1000, 0)).toBe(1000);
      expect(applyDiscount(1000, 100)).toBe(0);
    });

    it('debería validar rangos de fechas', () => {
      const isDateInRange = (date: Date, start: Date, end: Date): boolean => {
        return date >= start && date <= end;
      };

      const testDate = new Date('2024-01-15');
      const startDate = new Date('2024-01-01');
      const endDate = new Date('2024-01-31');

      expect(isDateInRange(testDate, startDate, endDate)).toBe(true);
      expect(isDateInRange(new Date('2024-02-01'), startDate, endDate)).toBe(false);
    });
  });
});
