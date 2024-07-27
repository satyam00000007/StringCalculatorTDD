import { TestBed } from '@angular/core/testing';
import { StringCalculatorService } from './string-calculator.service';
import { of } from 'rxjs';

describe('StringCalculatorService', () => {
  let service: StringCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringCalculatorService);
  });

  it('should be created StringCalculatorService', () => {
    expect(service).toBeTruthy();
  });

  describe('add', () => {
    it('should return 0 for an empty string', () => {
      service.add('').subscribe((res)=>{
        expect(res).toBe(0)
      }); 
    });

    it('should return the same number for all individual numbers', () => {
      service.add('5').subscribe((res)=>{
        expect(res).toBe(5)
      }); 
    });
  });
});