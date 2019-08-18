import { IConvert, ITemperatureConvertorFactory } from '../../IConvert';
import { TemperatureType } from '../../types/temperature';

export class FarenheitToCelsius implements IConvert {
  convert(value: number) {
    return value
  }
}

export class FarenheitToKelvin implements IConvert {
  convert(value: number) {
    return value
  }
}

export class FarenheitToRankine implements IConvert {
  convert(value: number) {
    return value
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
