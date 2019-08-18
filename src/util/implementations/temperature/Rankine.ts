import { IConvert, ITemperatureConvertorFactory } from '../../IConvert';
import { TemperatureType } from '../../types/temperature';

export class RankineToCelsius implements IConvert {
  convert(value: number) {
    return value
  }
}

export class RankineToFarenheit implements IConvert {
  convert(value: number) {
    return value
  }
}

export class RankineToKelvin implements IConvert {
  convert(value: number) {
    return value
  }
}

export class RankineConversionFactory implements ITemperatureConvertorFactory {
  getConvertor(to: TemperatureType) {
    switch (to) {
      case TemperatureType.Celsius:
        return new RankineToCelsius();

      case TemperatureType.Fahrenheit:
        return new RankineToFarenheit();

      case TemperatureType.Kelvin:
        return new RankineToKelvin();

      default:
        throw new Error('Invalid Conversion Request');
    }
  }
}