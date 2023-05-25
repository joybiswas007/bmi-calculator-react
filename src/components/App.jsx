import React, { useState } from 'react';
import Inputs from './Inputs';
import Time from './Time';

function App() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [result, setResult] = useState(null);

    function handleWeightChange(event) {
        setWeight(event.target.value);
    }

    function handleHeightChange(event) {
        setHeight(event.target.value);
    }

    function handleClick(event) {
        event.preventDefault();
        if (weight && height) {
            const calculatedResult = (weight / (height ** 2)).toFixed(2);
            setResult(calculatedResult);
        } else {
            setResult(null);
        }
    }

    return (
        <div className="input-area">
 <h1>
 <Time />
 </h1>
 <h1>Calculate your BMI</h1>
  <h1>{result !== null ? `Your BMI: ${result}` : null}</h1>
      <p>
        {result !== null && (
          <div className="result">
            {result < 18.5 ? (
              <span>You are underweight.</span>
            ) : (
              result < 25 ? (
                <span>You have a normal weight.</span>
              ) : (
                result < 30 ? (
                  <span>You are slightly overweight.</span>
                ) : (
                  result < 35 ? (
                    <span>You are obese.</span>
                  ) : (
                    <span>You are clinically obese.</span>
                  )
                )
              )
            )}
          </div>
        )}
      </p>
  <form className="form-control">
    <div className="input-container">
      <Inputs
        className="height"
        type="number"
        name="weight"
        placeholder="Enter your weight in Kg"
        value={weight}
        onChange={handleWeightChange}
      />
    </div>
    <div className="input-container">
      <Inputs
        className="weight"
        type="number"
        name="height"
        placeholder="Enter your height in Meter"
        value={height}
        onChange={handleHeightChange}
      />
    </div>
    <div className="button-container">
      <button type="submit" onClick={handleClick}>Calculate</button>
    </div>
  </form>
</div>
    );
}

export default App;