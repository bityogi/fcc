import { IConvert, IVolumeConvertorFactory } from '../../IConvert';
import { VolumeType } from '../../types/volume';
import { round } from '../../util';

export class ToLiters implements IConvert {
  convert(to: VolumeType) {
    return round(to * 28.3168);
  }
}

export class ToCubicInches implements IConvert {
  convert(to: VolumeType) {
    return round(to * 1728)
  }
}

export class ToCups implements IConvert {
  convert(to: VolumeType) {
    return round(to * 119.688)
  }
}

export class ToGallons implements IConvert {
  convert(to: VolumeType) {
    return round(to * 7.48052)
  }
}

export class ToTableSpoons implements IConvert {
  convert(to: VolumeType) {
    return round(to * 1915.013)
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