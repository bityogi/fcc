import { VolumeType } from './types/volume';
import { IConvert, IVolumeConvertorFactory } from './IConvert';
import {
  CubicFeetConversionFactory
} from './implementations/volume/cubicFeet';
import {
  CubicInchesConversionFactory
} from './implementations/volume/cubicInches';
import {
  CupsConversionFactory
} from './implementations/volume/cups';
import {
  GallonsConversionFactory
} from './implementations/volume/gallons';
import {
  LitersConversionFactory
} from './implementations/volume/liters';
import {
  TableSpoonsConversionFactory
} from './implementations/volume/tablespoons';


interface IVolumeFactory {
  GetConvertor(from: VolumeType, to: VolumeType) : IConvert
}


export default class VolumeConvertorFactory implements IVolumeFactory {

  GetConvertor(from: VolumeType, to: VolumeType) {
    let fromConvertorFactory : IVolumeConvertorFactory;

    switch (from) {
      case VolumeType.cubicFeet:
        fromConvertorFactory = new CubicFeetConversionFactory();
        break;

      case VolumeType.cubicInches:
        fromConvertorFactory = new CubicInchesConversionFactory();
        break;

      case VolumeType.cups:
        fromConvertorFactory = new CupsConversionFactory();
        break;
      
      case VolumeType.gallons:
        fromConvertorFactory = new GallonsConversionFactory();
        break;
      
      case VolumeType.liters:
        fromConvertorFactory = new LitersConversionFactory();
        break;
      
      case VolumeType.tablespoons:
        fromConvertorFactory = new TableSpoonsConversionFactory();
        break;

      default:
        throw new Error('Invlid Conversion Request');
    }
    return fromConvertorFactory.getConvertor(to);
  }
}