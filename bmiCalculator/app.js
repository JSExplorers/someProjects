document.getElementById('bmiForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const gender = document.getElementById('gender').value;
  const age = parseInt(document.getElementById('age').value);
  const heightFeet = parseInt(document.getElementById('height-feet').value);
  const heightInch = parseInt(document.getElementById('height-inch').value);
  const weight = parseFloat(document.getElementById('weight').value);

  if (gender && age && heightFeet && heightInch && weight) {
    const heightInMeter = (heightFeet * 12 + heightInch) * 0.0254;

    const bmi = (weight / (heightInMeter * heightInMeter)).toFixed(2);
    const result = document.getElementById('result');

    let category = '';

    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      category = 'Healthy Weight';
    } else if (bmi >= 25 && bmi < 30) {
      category = 'Overweight';
    } else {
      category = 'Obesity';
    }

    result.innerHTML = `you BMI code is ${bmi} and you are ${category}`;

    document.getElementById('age').value = '';
    document.getElementById('height-feet').value = '';
    document.getElementById('height-inch').value = '';
    document.getElementById('weight').value = '';
  }
});
