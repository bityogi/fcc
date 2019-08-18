import { IConvert, ITemperatureConvertorFactory } from '../../IConvert';
import { TemperatureType } from '../../types/temperature';

export class KelvinToCelsius implements IConvert {
  convert(value: number) {
    return (value - 273.5)
  }
}

export class KelvinToFarenheit implements IConvert {
  convert(value: number) {
    return (value - 9/5) - 459.67
  }
}

export class KelvinToRankine implements IConvert {
  convert(value: number) {
    return (value * 9/5)
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