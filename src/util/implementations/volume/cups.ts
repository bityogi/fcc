import { IConvert, IVolumeConvertorFactory } from '../../IConvert';
import { VolumeType } from '../../types/volume';
import { round } from '../../util';

export class ToCubicFeet implements IConvert {
  convert(to: VolumeType) {
    return to //Not implemented
  }
}

export class ToCubicInches implements IConvert {
  convert(to: VolumeType) {
    return to //Not implemented
  }
}

export class ToLiters implements IConvert {
  convert(to: VolumeType) {
    return to //Not implemented
  }
}

export class ToGallons implements IConvert {
  convert(to: VolumeType) {
    return to //Not implemented
  }
}

export class ToTableSpoons implements IConvert {
  convert(to: VolumeType) {
    return to //Not implemented
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