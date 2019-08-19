import { IConvert, IVolumeConvertorFactory } from '../../IConvert';
import { VolumeType } from '../../types/volume';
import { round } from '../../util';

export class ToCubicFeet implements IConvert {
  convert(to: VolumeType) {
    return round(to / 1915.013)
  }
}

export class ToCubicInches implements IConvert {
  convert(to: VolumeType) {
    return round(to / 1.108)
  }
}

export class ToCups implements IConvert {
  convert(to: VolumeType) {
    return round(to / 16)
  }
}

export class ToGallons implements IConvert {
  convert(to: VolumeType) {
    return round(to / 256)
  }
}

export class ToLiters implements IConvert {
  convert(to: VolumeType) {
    return round(to / 67.628)
  }
}

export class TableSpoonsConversionFactory implements IVolumeConvertorFactory {
  getConvertor(to: VolumeType) {
    switch (to) {
      case VolumeType.cubicFeet:
        return new ToCubicFeet();

      case VolumeType.cubicInches:
        return new ToCubicInches();

      case VolumeType.cups:
        return new ToCups();

      case VolumeType.gallons:
        return new ToGallons();

      case VolumeType.liters:
        return new ToLiters();

      default:
        throw new Error('Invalid Conversion Request');
    }
  }
}