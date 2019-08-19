import { IConvert, IVolumeConvertorFactory } from '../../IConvert';
import { VolumeType } from '../../types/volume';
import { round } from '../../util';

export class ToLiters implements IConvert {
  convert(value: number) {
    return round(value * 28.3168);
  }
}

export class ToCubicInches implements IConvert {
  convert(value: number) {
    return round(value * 1728)
  }
}

export class ToCups implements IConvert {
  convert(value: number) {
    return round(value * 119.688)
  }
}

export class ToGallons implements IConvert {
  convert(value: number) {
    return round(value * 7.48052)
  }
}

export class ToTableSpoons implements IConvert {
  convert(value: number) {
    return round(value * 1915.013)
  }
}

export class CubicFeetConversionFactory implements IVolumeConvertorFactory {
  getConvertor(to: VolumeType) {
    switch (to) {
      case VolumeType.liters:
        return new ToLiters();

      case VolumeType.cubicInches:
        return new ToCubicInches();

      case VolumeType.cups:
        return new ToCups();

      case VolumeType.gallons:
        return new ToGallons();

      case VolumeType.tablespoons:
        return new ToTableSpoons();

      default:
        throw new Error('Invalid Conversion Request');
    }
  }
}