import { TemperatureType } from './types/temperature'

export interface IConvert {
  convert(value: number) : number
}

export interface ITemperatureConvertorFactory {
  getConvertor: (to: TemperatureType) => IConvert
}
