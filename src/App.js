import { useState } from "react";
import "./css/style.css";
import Slider from "@mui/material/Slider";

function App() {

  const [height, setHeight] = useState(10);
  const [weight, setWeight] = useState(10);
  const [bmi, calculateBMI] = useState(10);
  const [result, changeResult] = useState('');
  const [description, changeDescription] = useState('');

  return (
    <div className="App">
      <div id="bmi-calculator-wrapper">
        <div className="result-area">
          <h4>Your Result</h4>
          <h2 className="result-value">{bmi.toFixed(1)}</h2>
          <h3 className="result-text">
            {result}
          </h3>
          <p className="result-detail">
{description}
          </p>
        </div>

        <div className="input-area">
          <h4>Please Enter your data: </h4>
          <div className="input-value-wrapper">
            <label for="weight" className=" red-color">
              Weight(lbs)
            </label>
            <Slider
            min={10}
            max={500}
              valueLabelDisplay="auto"
              aria-label="Temperature"
              value={weight}
              onChange={(e)=>{
                console.log(weight);
               
                setWeight(e.target.value);
              }}
            />
          </div>
          <div className="input-value-wrapper">
            <label for="height" className=" yellow-color">
              Height(in)
            </label>

            <Slider
             min={0}
             max={100}
              valueLabelDisplay="auto"
              aria-label="Height"
              value={height}
              onChange={(e) => {
                setHeight(e.target.value);
              }}
            />
          </div>
          <button
      onClick={()=>{
        let bmi = (weight*0.453592)/((height*0.0254)*(height*0.0254));
          calculateBMI(bmi)
          if(bmi < 18.5){
              changeResult('Underweight');
              changeDescription('Your BMI indicates you may be underweight. Consider consulting a healthcare professional for guidance on achieving a healthy weight.');
          }
          else if(bmi >= 18.5 && bmi <= 24.9){
            changeResult('Normal Weight');
            changeDescription('Your BMI falls within the normal range. Keep up the good work with maintaining a healthy lifestyle!');
          }else if(bmi >= 25 && bmi <= 29.9){
            changeResult('Overweight');
            changeDescription('Your BMI suggests you may be overweight. Focus on healthy eating and regular exercise to manage your weight effectively.');
          }else {
              changeResult('Obesity');
              changeDescription("Your BMI indicates obesity. It's important to prioritize your health by adopting lifestyle changes and seeking support from healthcare professionals.");
          }
      }}  
          className="calculate-button">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
