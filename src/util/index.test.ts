import CheckResponse, { ResultType } from './index';
import { TemperatureType } from './types/temperature';
import { VolumeType } from './types/volume';

describe('CheckResponse', () => {
  it('test example scenario 1', () => {
    const result = CheckResponse(84.2, 'fahrenheit' as TemperatureType, 'rankine' as TemperatureType, 543.94);
    expect(result).toBe(ResultType.Correct);
  });

  it('test example scenario 2', () => {
    const result = CheckResponse(317.33, 'kelvin' as TemperatureType, 'fahrenheit' as TemperatureType, 111.554);
    expect(result).toBe(ResultType.Incorrect);
  });

  it('test example scenario 3', () => {
    const result = CheckResponse(25.6, 'cups' as VolumeType, 'liters' as VolumeType, 6.1);
    expect(result).toBe(ResultType.Correct);
  });

  it('test example scenario 4', () => {
    const result = CheckResponse(73.12, 'gallons' as VolumeType, 'Kelvin' as VolumeType, 19.4);
    expect(result).toBe(ResultType.Invalid);
  });

  it('test example scenario 5', () => {
    const result = CheckResponse(6.5, 'fahrenheit' as VolumeType, 'rankine' as VolumeType, 'dog');
    expect(result).toBe(ResultType.Incorrect);
  });

  it('test example scenario 6', () => {
    const result = CheckResponse(131.6, 'dog' as VolumeType, 'celsius' as TemperatureType, 45.32);
    expect(result).toBe(ResultType.Invalid);
  });
  
  
});
