import { IConvert, IVolumeConvertorFactory } from '../../IConvert';
import { VolumeType } from '../../types/volume';
import { round } from '../../util';

export class ToCubicFeet implements IConvert {
  convert(to: number) {
    return round(to / 7.481)
  }
}

export class ToCubicInches implements IConvert {
  convert(to: number) {
    return round(to * 231)
  }
}

export class ToCups implements IConvert {
  convert(to: number) {
    return round(to * 16)
  }
}

export class ToLiters implements IConvert {
  convert(to: number) {
    return round(to * 3.785)
  }
}

export class ToTableSpoons implements IConvert {
  convert(to: number) {
    return round(to * 256)
  }
}

export class GallonsConversionFactory implements IVolumeConvertorFactory {
  getConvertor(to: VolumeType) {
    switch (to) {
      case VolumeType.cubicFeet:
        return new ToCubicFeet();

      case VolumeType.cubicInches:
        return new ToCubicInches();

      case VolumeType.cups:
        return new ToCups();

      case VolumeType.liters:
        return new ToLiters();

      case VolumeType.tablespoons:
        return new ToTableSpoons();

      default:
        throw new Error('Invalid Conversion Request');
    }
  }
}