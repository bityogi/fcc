import { TemperatureType } from './types/temperature';
import { VolumeType } from './types/volume';

export interface IConvert {
  convert(value: number) : number
}

export interface ITemperatureConvertorFactory {
  getConvertor: (to: TemperatureType) => IConvert
}

export interface IVolumeConvertorFactory {
  getConvertor: (to: VolumeType) => IConvert
}