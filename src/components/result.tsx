import React from 'react';
import Popover from 'react-tiny-popover';

import './result.css';

interface ResultProps {
  isOpen : boolean,
  result : string,
  reset : () => void
}

const Result = (props: ResultProps) => {
  const { isOpen, result, reset } = props;

  return (
    <div className="resultPopover">
      <Popover
        isOpen={isOpen}
        content={(
          <div style={{ fontSize: '40px' }}>
            { result }
          </div>
        )}
      >
        <div onClick={reset}>
            
        </div>
      </Popover>
    </div>
  )
}

export default Result;