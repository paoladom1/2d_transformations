import React from 'react';

function ControlButton({ label, onIncrease, onDecrease, min = 1, max = 5 }) {
    const disableDecrease = label <= min;
    const disableIncrease = label >= max;
  
    return (
      <div className="control">
        <button
          disabled={disableDecrease}
          onClick={onDecrease}
          className="button"
        >
          -
        </button>
        <div className="level">{String(label)}</div>
        <button
          disabled={disableIncrease}
          onClick={onIncrease}
          className="button"
        >
          +
        </button>
      </div>
    );
  }

  export default ControlButton;