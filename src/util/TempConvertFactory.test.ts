import TempConversionFactory from './TempConvertFactory';
import { TemperatureType } from './types/temperature';
import { CelsiusToFarenheit, CelsiusToKelvin, CelsiusToRankine } from './implementations/temperature/Celsius';
import { FarenheitToCelsius, FarenheitToKelvin, FarenheitToRankine } from './implementations/temperature/Farenheit';
import { KelvinToCelsius, KelvinToFarenheit, KelvinToRankine } from './implementations/temperature/Kelvin';
import { RankineToCelsius, RankineToFarenheit, RankineToKelvin } from './implementations/temperature/Rankine';

describe('Temperature Conversion Factory', () => {
  const tempConversionFactory = new TempConversionFactory();

  // Celsius
  describe('returns a celsius ', () => {
    const from = TemperatureType.Celsius;

    describe('to fareneit convertor', () => {
      const to = TemperatureType.Fahrenheit;
      const convertor = tempConversionFactory.GetConvertor(from, to);
  
      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(CelsiusToFarenheit);
      });
      it('converts correctly', () => {
        const tempFrom = 0;
        const expectedValue = 32;
        expect(convertor.convert(tempFrom)).toBe(expectedValue);
      });
    });
    

    describe('to kelvin convertor', () => {
      const to = TemperatureType.Kelvin;
      const convertor = tempConversionFactory.GetConvertor(from, to);

      it('of valid type ', () => {
        expect(convertor).toBeInstanceOf(CelsiusToKelvin);
      });

      it('converts correctly', () => {
        const tempFrom = 0;
        const expectedValue = 273.1;
        expect(convertor.convert(tempFrom)).toBe(expectedValue);
      });
    });

    describe('to rankine convertor', () => {
      const to = TemperatureType.Rankine;
      const convertor = tempConversionFactory.GetConvertor(from, to);
  
      it('of valid type ', () => {
        expect(convertor).toBeInstanceOf(CelsiusToRankine);
      });

      it('converts correctly', () => {
        const tempFrom = 0;
        const expectedValue = 491.7;
        expect(convertor.convert(tempFrom)).toBe(expectedValue);
      });
    });
    

    it('to throw an error ', () => {
      const to = TemperatureType.Celsius;
      
      expect(() => {
        tempConversionFactory.GetConvertor(from, to)
      }).toThrow();
    });

  });

  // Fahrenheit
  describe('returns a valid fahrenheit ', () => {
    const from = TemperatureType.Fahrenheit;

    describe('to celsius convertor', () => {
      const to = TemperatureType.Celsius;
      const convertor = tempConversionFactory.GetConvertor(from, to);
  
      it('of valid type ', () => {
        expect(convertor).toBeInstanceOf(FarenheitToCelsius);
      });

      it('converts correctly', () => {
        const tempFrom = 32;
        const expectedValue = 0;
        expect(convertor.convert(tempFrom)).toBe(expectedValue);
      });

    });

    describe('to kelvin convertor', () => {
      const to = TemperatureType.Kelvin;
      const convertor = tempConversionFactory.GetConvertor(from, to);

      it('of valid type ', () => {
        expect(convertor).toBeInstanceOf(FarenheitToKelvin);
      });

      it('converts correctly', () => {
        const tempFrom = 32;
        const expectedValue = 273.1;
        expect(convertor.convert(tempFrom)).toBe(expectedValue);
      });
    });

    describe('to rankine convertor ', () => {
      const to = TemperatureType.Rankine;
      const convertor = tempConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(FarenheitToRankine);
      });

      it('converts correctly', () => {
        const tempFrom = 84.2;
        const expectedValue = 543.9;
        expect(convertor.convert(tempFrom)).toBe(expectedValue);
      });
    });

    

    it('to throw an error ', () => {
      const to = TemperatureType.Fahrenheit;
      
      expect(() => {
        tempConversionFactory.GetConvertor(from, to)
      }).toThrow();
    });
  });


  // Kelvin
  describe('returns a valid kelvin ', () => {
    const from = TemperatureType.Kelvin;

    describe('to celsius convertor ', () => {
      const to = TemperatureType.Celsius;
      const convertor = tempConversionFactory.GetConvertor(from, to);

      it('of valid type ', () => {
        expect(convertor).toBeInstanceOf(KelvinToCelsius);
      });

      it('converts correctly', () => {
        const tempFrom = 0;
        const expectedValue = -273.1;
        expect(convertor.convert(tempFrom)).toBe(expectedValue);
      });

    });
    
    describe('to fahrenheit convertor', () => {
      const to = TemperatureType.Fahrenheit;
      const convertor = tempConversionFactory.GetConvertor(from, to);

      it('of valid type ', () => {
        expect(convertor).toBeInstanceOf(KelvinToFarenheit);
      });

      it('converts correctly', () => {
        const tempFrom = 0;
        const expectedValue = -459.7;
        expect(convertor.convert(tempFrom)).toBe(expectedValue);
      });
    });
    

    describe('to rankine convertor', () => {
      const to = TemperatureType.Rankine;
      const convertor = tempConversionFactory.GetConvertor(from, to);

      it('to rankine convertor ', () => {
        expect(convertor).toBeInstanceOf(KelvinToRankine);
      });

      it('converts correctly', () => {
        const tempFrom = 10;
        const expectedValue = 18;
        expect(convertor.convert(tempFrom)).toBe(expectedValue);
      });
    });
    

    it('to throw an error ', () => {
      const to = TemperatureType.Kelvin;
      
      expect(() => {
        tempConversionFactory.GetConvertor(from, to)
      }).toThrow();
    });
  });

  describe('returns a valid rankine ', () => {
    const from = TemperatureType.Rankine;

    describe('to celsius convertor', () => {
      const to = TemperatureType.Celsius;
      const convertor = tempConversionFactory.GetConvertor(from, to);
  
      it('of valid type ', () => {
        expect(convertor).toBeInstanceOf(RankineToCelsius);
      });

      it('converts correctly', () => {
        const tempFrom = 10;
        const expectedValue = -267.6;
        expect(convertor.convert(tempFrom)).toBe(expectedValue);
      });
    });

    describe('to fahrenheit convertor ', () => {
      const to = TemperatureType.Fahrenheit;
      const convertor = tempConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(RankineToFarenheit);
      });

      it('converts correctly', () => {
        const tempFrom = 10;
        const expectedValue = -449.7;
        expect(convertor.convert(tempFrom)).toBe(expectedValue);
      });
    });

    describe('to kelvin convertor ', () => {
      const to = TemperatureType.Kelvin;
      const convertor = tempConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(RankineToKelvin);
      });

      it('converts correctly', () => {
        const tempFrom = 10;
        const expectedValue = 5.6;
        expect(convertor.convert(tempFrom)).toBe(expectedValue);
      });
    })
    
    
    

    

    

    

    it('to throw an error ', () => {
      const to = TemperatureType.Rankine;
      
      expect(() => {
        tempConversionFactory.GetConvertor(from, to)
      }).toThrow();
    });
  });


});