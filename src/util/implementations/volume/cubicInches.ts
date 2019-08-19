import { IConvert, IVolumeConvertorFactory } from '../../IConvert';
import { VolumeType } from '../../types/volume';
import { round } from '../../util';

export class ToCubicFeet implements IConvert {
  convert(to: VolumeType) {
    return round(to / 1728)
  }
}

export class ToLiters implements IConvert {
  convert(to: VolumeType) {
    return round(to / 61.024)
  }
}

export class ToCups implements IConvert {
  convert(to: VolumeType) {
    return round(to / 14.438)
  }
}

export class ToGallons implements IConvert {
  convert(to: VolumeType) {
    return round(to / 231)
  }
}

export class ToTableSpoons implements IConvert {
  convert(to: VolumeType) {
    return round(to * 1.108)
  }
}

export class CubicInchesConversionFactory implements IVolumeConvertorFactory {
  getConvertor(to: VolumeType) {
    switch (to) {
      case VolumeType.cubicFeet:
        return new ToCubicFeet();

      case VolumeType.liters:
        return new ToLiters();

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