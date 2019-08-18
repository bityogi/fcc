import TempConversionFactory from './TempConvertFactory';
import { TemperatureType } from './types/temperature';
import { CelsiusToFarenheit, CelsiusToKelvin, CelsiusToRankine } from './implementations/temperature/Celsius';
import { FarenheitToCelsius, FarenheitToKelvin, FarenheitToRankine } from './implementations/temperature/Farenheit';
import { KelvinToCelsius, KelvinToFarenheit, KelvinToRankine } from './implementations/temperature/Kelvin';
import { RankineToCelsius, RankineToFarenheit, RankineToKelvin } from './implementations/temperature/Rankine';

describe('Temperature Conversion Factory', () => {
  const tempConversionFactory = new TempConversionFactory();

  describe('returns a valid celsius ', () => {
    const from = TemperatureType.Celsius;

    it('to farenheit convertor ', () => {
      const to = TemperatureType.Fahrenheit;
      const convertor = tempConversionFactory.GetConvertor(from, to);

      expect(convertor).toBeInstanceOf(CelsiusToFarenheit);
    });

    it('to kelvin convertor ', () => {
      const to = TemperatureType.Kelvin;
      const convertor = tempConversionFactory.GetConvertor(from, to);

      expect(convertor).toBeInstanceOf(CelsiusToKelvin);
    });
    
    it('to rankine convertor ', () => {
      const to = TemperatureType.Rankine;
      const convertor = tempConversionFactory.GetConvertor(from, to);

      expect(convertor).toBeInstanceOf(CelsiusToRankine);
    });

    it('to throw an error ', () => {
      const to = TemperatureType.Celsius;
      
      expect(() => {
        tempConversionFactory.GetConvertor(from, to)
      }).toThrow();
    });

  });

  describe('returns a valid fahrenheit ', () => {
    const from = TemperatureType.Fahrenheit;

    it('to celsius convertor ', () => {
      const to = TemperatureType.Celsius;
      const convertor = tempConversionFactory.GetConvertor(from, to);

      expect(convertor).toBeInstanceOf(FarenheitToCelsius);
    });

    it('to kelvin convertor ', () => {
      const to = TemperatureType.Kelvin;
      const convertor = tempConversionFactory.GetConvertor(from, to);

      expect(convertor).toBeInstanceOf(FarenheitToKelvin);
    });

    it('to rankine convertor ', () => {
      const to = TemperatureType.Rankine;
      const convertor = tempConversionFactory.GetConvertor(from, to);

      expect(convertor).toBeInstanceOf(FarenheitToRankine);
    });

    it('to throw an error ', () => {
      const to = TemperatureType.Fahrenheit;
      
      expect(() => {
        tempConversionFactory.GetConvertor(from, to)
      }).toThrow();
    });
  });

  describe('returns a valid kelvin ', () => {
    const from = TemperatureType.Kelvin;

    it('to celsius convertor ', () => {
      const to = TemperatureType.Celsius;
      const convertor = tempConversionFactory.GetConvertor(from, to);

      expect(convertor).toBeInstanceOf(KelvinToCelsius);
    });

    it('to fahrenheit convertor ', () => {
      const to = TemperatureType.Fahrenheit;
      const convertor = tempConversionFactory.GetConvertor(from, to);

      expect(convertor).toBeInstanceOf(KelvinToFarenheit);
    });

    it('to rankine convertor ', () => {
      const to = TemperatureType.Rankine;
      const convertor = tempConversionFactory.GetConvertor(from, to);

      expect(convertor).toBeInstanceOf(KelvinToRankine);
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

    it('to celsius convertor ', () => {
      const to = TemperatureType.Celsius;
      const convertor = tempConversionFactory.GetConvertor(from, to);

      expect(convertor).toBeInstanceOf(RankineToCelsius);
    });

    it('to fahrenheit convertor ', () => {
      const to = TemperatureType.Fahrenheit;
      const convertor = tempConversionFactory.GetConvertor(from, to);

      expect(convertor).toBeInstanceOf(RankineToFarenheit);
    });

    it('to kelvin convertor ', () => {
      const to = TemperatureType.Kelvin;
      const convertor = tempConversionFactory.GetConvertor(from, to);

      expect(convertor).toBeInstanceOf(RankineToKelvin);
    });

    it('to throw an error ', () => {
      const to = TemperatureType.Rankine;
      
      expect(() => {
        tempConversionFactory.GetConvertor(from, to)
      }).toThrow();
    });
  });

  
});