import { TemperatureType } from './types/temperature';
import { IConvert } from './IConvert'
import {
  CelsiusConversionFactory
} from './implementations/temperature/Celsius';

import {
  FarenheitConversionFactory
} from './implementations/temperature/Farenheit';

import {
  KelvinConversionFactory
} from './implementations/temperature/Kelvin';

import {
  RankineConversionFactory
} from './implementations/temperature/Rankine';

interface ITemperatureFactory {
  GetConvertor(from: TemperatureType, to: TemperatureType) : IConvert
}

export default class TemperatureConvertorFactory implements ITemperatureFactory {
  GetConvertor(from: TemperatureType, to: TemperatureType) {
    switch (from) {
      case TemperatureType.Celsius:
        const celsiusConversionFactory = new CelsiusConversionFactory();
        return celsiusConversionFactory.getConvertor(to);
      
      case TemperatureType.Fahrenheit:
        const farenheitConversionFactory = new FarenheitConversionFactory();
        return farenheitConversionFactory.getConvertor(to);

      case TemperatureType.Kelvin:
        const kelvinConversionFactory = new KelvinConversionFactory();
        return kelvinConversionFactory.getConvertor(to);

      case TemperatureType.Rankine:
        const rankineConversionFactory = new RankineConversionFactory();
        return rankineConversionFactory.getConvertor(to);

      default:
        throw new Error('Invalid Conversion Request')
    }
  }
}