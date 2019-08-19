import Convert, { ResultType } from './index';
import { TemperatureType } from './types/temperature';

describe('Convert', () => {
  describe('can call with correct arguments', () => {
    const result = Convert(84.2, 'fahrenheit' as TemperatureType, 'rankine' as TemperatureType, 543.94);
    expect(result).toBe(ResultType.Correct);
  });
  
});
