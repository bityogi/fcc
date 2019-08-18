import { IConvert, ITemperatureConvertorFactory } from '../../IConvert';
import { TemperatureType } from '../../types/temperature';
import { round } from '../../util';


export class CelsiusToFarenheit implements IConvert {
  convert(value: number){
    return round((value * 9/5) + 32);
  }
}

export class CelsiusToKelvin implements IConvert {
  convert(value: number) {
    return round(value + 273.15);
  }
}

export class CelsiusToRankine implements IConvert {
  convert(value: number) {
    return round((value * 9/5) + 491.67);
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
