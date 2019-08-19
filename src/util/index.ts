import { TemperatureType } from "./types/temperature";
import { VolumeType } from "./types/volume";
import TemperatureConvertorFactory from "./TempConvertFactory";
import { round } from "./util";
import VolumeConvertorFactory from "./VolumeConvertFactory";

export enum ResultType {
  Correct = 'correct',
  Incorrect  = 'incorrect',
  Invalid = 'invalid'
}

export default function CheckResponse (
  value: number, 
  from: TemperatureType | VolumeType, 
  to: TemperatureType | VolumeType,
  answer: number) : ResultType {
    
    if (Object.values(TemperatureType).includes(from)) {
      // Convert from temperature
      try {
        const tempConversionFactory = new TemperatureConvertorFactory();
        const convertor = tempConversionFactory.GetConvertor(from as TemperatureType, to as TemperatureType);
        const result = convertor.convert(value);
       
        return checkAnswer(answer, result);
      } catch (error) {
        // console.error('Error converting temperature: ', error.message);
        return ResultType.Invalid;
      }
      
    } else if (Object.values(VolumeType).includes(from)) {
      // Convert from Volume
      try {
        const volumeConversionFactory = new VolumeConvertorFactory();
        const convertor = volumeConversionFactory.GetConvertor(from as VolumeType, to as VolumeType);
        const result = convertor.convert(value);

        return checkAnswer(answer, result);
        
      } catch (error) {
        // console.error('Error converting volume: ', error.message);
        return ResultType.Invalid;
      }
    } else {
      return ResultType.Invalid;
    }

    function checkAnswer(answer: any, result: number) : ResultType {
      try {
        const roundedAnswer = round(answer);
        if (roundedAnswer === result) {
          return ResultType.Correct
        } else {
          return ResultType.Incorrect
        }
      } catch (error) {
        //There was an error rounding the answer. Return, `incorrect`
        return ResultType.Incorrect
      }
    }

  }