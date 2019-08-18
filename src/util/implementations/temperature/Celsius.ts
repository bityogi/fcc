import { IConvert, ITemperatureConvertorFactory } from '../../IConvert';
import { TemperatureType } from '../../types/temperature';


export class CelsiusToFarenheit implements IConvert {
  convert(value: number){
    return value;
  }
}

export class CelsiusToKelvin implements IConvert {
  convert(value: number) {
    return value;
  }
}

export class CelsiusToRankine implements IConvert {
  convert(value: number) {
    return value;
  }
}

export class CelsiusConversionFactory implements ITemperatureConvertorFactory {
  getConvertor(to: TemperatureType) {
    switch (to) {
      case TemperatureType.Fahrenheit:
        return new CelsiusToFarenheit();

      case TemperatureType.Kelvin:
        return new CelsiusToKelvin();

      case TemperatureType.Rankine:
        return new CelsiusToRankine();

      default:
        throw new Error('Invalid Conversion Request');
    }
  }
}
