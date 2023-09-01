document.getElementById('bmiForm').addEventListener('submit', function (e) {
  e.preventDefault;

  const gender = document.getElementById('gender').value;
  const age = parseInt(document.getElementById('age').value);
  const heightFeet = parseInt(document.getElementById('height-feet').value);
  const heightInch = parseInt(document.getElementById('height-inch').value);
  const weight = parseFloat(document.getElementById('weight').value);




    if(gender && age && heightFeet&& heightInch&&weight){
        const  heightInMeter = ((heightFeet * 12) + heightInch)*0.0254

        const bmi = weight / (heightInMeter*heightInMeter);
        const result = document.getElementById('result')

    }









});
