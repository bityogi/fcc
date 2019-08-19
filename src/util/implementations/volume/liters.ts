import { IConvert, IVolumeConvertorFactory } from '../../IConvert';
import { VolumeType } from '../../types/volume';
import { round } from '../../util';

export class ToCubicFeet implements IConvert {
  convert(to: VolumeType) {
    return round(to / 28.317);
  }
}

export class ToCubicInches implements IConvert {
  convert(to: VolumeType) {
    return round(to * 61.024);
  }
}

export class ToCups implements IConvert {
  convert(to: VolumeType) {
    return round(to * 4.227);
  }
}

export class ToGallons implements IConvert {
  convert(to: VolumeType) {
    return round(to / 3.785);
  }
}

export class ToTableSpoons implements IConvert {
  convert(to: VolumeType) {
    return round(to * 67.628);
  }
}

export class LitersConversionFactory implements IVolumeConvertorFactory {
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

      case VolumeType.tablespoons:
        return new ToTableSpoons();

      default:
        throw new Error('Invalid Conversion Request');
    }
  }
}