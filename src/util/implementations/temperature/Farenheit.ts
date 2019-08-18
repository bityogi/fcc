import { IConvert, ITemperatureConvertorFactory } from '../../IConvert';
import { TemperatureType } from '../../types/temperature';
import { round } from '../../util';

export class FarenheitToCelsius implements IConvert {
  convert(value: number) {
    return round((value - 32) * 5/9);
  }
}

export class FarenheitToKelvin implements IConvert {
  convert(value: number) {
    return round((value - 32) * 5/9 + 273.15);
  }
}

export class FarenheitToRankine implements IConvert {
  convert(value: number) {
    return round(value + 459.67);
  }
}

export class FarenheitConversionFactory implements ITemperatureConvertorFactory {
  getConvertor(to: TemperatureType) {
    switch (to) {
      case TemperatureType.Celsius:
        return new FarenheitToCelsius();

      case TemperatureType.Kelvin:
        return new FarenheitToKelvin();

      case TemperatureType.Rankine:
        return new FarenheitToRankine();

      default:
        throw new Error('Invalid Conversion Request');
    }
  }
}
