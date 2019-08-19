import { IConvert, IVolumeConvertorFactory } from '../../IConvert';
import { VolumeType } from '../../types/volume';
import { round } from '../../util';

export class ToCubicFeet implements IConvert {
  convert(to: number) {
    return round(to / 119.688)
  }
}

export class ToCubicInches implements IConvert {
  convert(to: number) {
    return round(to * 14.438)
  }
}

export class ToLiters implements IConvert {
  convert(to: number) {
    return round(to / 4.227)
  }
}

export class ToGallons implements IConvert {
  convert(to: number) {
    return round(to / 16)
  }
}

export class ToTableSpoons implements IConvert {
  convert(to: number) {
    return round(to * 16)
  }
}

export class CupsConversionFactory implements IVolumeConvertorFactory {
  getConvertor(to: VolumeType) {
    switch (to) {
      case VolumeType.cubicFeet:
        return new ToCubicFeet();

      case VolumeType.cubicInches:
        return new ToCubicInches();

      case VolumeType.liters:
        return new ToLiters();

      case VolumeType.gallons:
        return new ToGallons();

      case VolumeType.tablespoons:
        return new ToTableSpoons();

      default:
        throw new Error('Invalid Conversion Request');
    }
  }
}