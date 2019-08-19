import React, { useState } from 'react';
import { isEmpty } from 'lodash';

import CheckResponse from '../util';
import './form.css';
import { TemperatureType } from '../util/types/temperature';
import { VolumeType } from '../util/types/volume';
import ResultPopover from './result';

interface responseProps {
}

const ResponseForm = (props : responseProps) => {
  const [value, setValue] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState('');
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const checkAnswer = () => {
    let fromUnit : TemperatureType | VolumeType
    if (Object.values(TemperatureType).includes(from)) {
      fromUnit = from as TemperatureType;
    } else {
      fromUnit = from as VolumeType;
    }
    let toUnit : TemperatureType | VolumeType
    if (Object.values(TemperatureType).includes(from)) {
      toUnit = to as TemperatureType;
    } else {
      toUnit = to as VolumeType;
    }
    const result = CheckResponse(Number(value), fromUnit, toUnit, Number(answer));
    setResult(result);
    setIsPopoverOpen(true);
  }

  const isValid = !isEmpty(value) && !isEmpty(from) && !isEmpty(to) && !isEmpty(answer);

  const resetResult = () => {
    setIsPopoverOpen(false);
    setResult('');
    setValue('');
    setFrom('');
    setTo('');
    setAnswer('');
  }
  return (
    <div className="wrapper">
      <div className="formContainer">
        <div className="field">
          <label>
            Input Numerical Value:
          </label>
          <input
            className="input"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <div className="field">
          <label>
            Input Unit of Measure:
          </label>
          <input
            className="input" 
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>

        <div className="field">
          <label>
            Target Unit of Measure:
          </label>
          <input 
            className="input"
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>

        <div className="field">
          <label>
            Student Response:
          </label>
          <input
            className="input"
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>

        <div>
          <button
            className="button"
            onClick={isPopoverOpen? resetResult : checkAnswer}
            disabled={!isValid}
          >
            {isPopoverOpen ? 'Reset' : 'Check'}
          </button>
        </div>
      </div>
      <ResultPopover
        isOpen={isPopoverOpen}
        result={result}
        reset={resetResult}
      />
    </div>
  )
}

export default ResponseForm;