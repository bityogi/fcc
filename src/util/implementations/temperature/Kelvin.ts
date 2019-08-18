import { IConvert, ITemperatureConvertorFactory } from '../../IConvert';
import { TemperatureType } from '../../types/temperature';
import { round } from '../../util';

export class KelvinToCelsius implements IConvert {
  convert(value: number) {
    return round((value - 273.15));
  }
}

export class KelvinToFarenheit implements IConvert {
  convert(value: number) {
    return round((value - 273.15) * 9/5 + 32);
  }
}

export class KelvinToRankine implements IConvert {
  convert(value: number) {
    return round(value * 9/5);
  }
}

export class KelvinConversionFactory implements ITemperatureConvertorFactory {
  getConvertor(to: TemperatureType) {
    switch (to) {
      case TemperatureType.Celsius:
        return new KelvinToCelsius();

      case TemperatureType.Fahrenheit:
        return new KelvinToFarenheit();

      case TemperatureType.Rankine:
        return new KelvinToRankine();

      default:
        throw new Error('Invalid Conversion Request');
    }
  }
}