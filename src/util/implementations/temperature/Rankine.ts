import { IConvert, ITemperatureConvertorFactory } from '../../IConvert';
import { TemperatureType } from '../../types/temperature';
import { round } from '../../util';

export class RankineToCelsius implements IConvert {
  convert(value: number) {
    return round((value - 491.67) * 5/9);
  }
}

export class RankineToFarenheit implements IConvert {
  convert(value: number) {
    return round(value - 459.67);
  }
}

export class RankineToKelvin implements IConvert {
  convert(value: number) {
    return round(value * 5/9);
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