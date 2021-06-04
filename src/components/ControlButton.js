import React from 'react';

function ControlButton({ label, onIncrease, onDecrease, min = 1, max = 5 }) {
    const disableDecrease = label <= min;
    const disableIncrease = label >= max;
  
    return (
      <div className="Control">
        <button
          disabled={disableDecrease}
          onClick={onDecrease}
          className="Button"
        >
          -
        </button>
        <div className="Level">{String(label)}</div>
        <button
          disabled={disableIncrease}
          onClick={onIncrease}
          className="Button"
        >
          +
        </button>
      </div>
    );
  }

  export default ControlButton;