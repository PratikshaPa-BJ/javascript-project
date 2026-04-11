const form = document.querySelector("form");


form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);
  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);

  const result = document.querySelector("#results");
  const resGuide = document.querySelector("#res-guide");

  if (height <= 0 || isNaN(height)) {
    result.innerHTML = 'Please provide a valid height';

  } else if (weight <= 0 || isNaN(weight)) {
    result.innerHTML = `Please provide a valid weight ${weight}`;

  } else {
    const bmi = Number((weight / ((height * height) / 10000)).toFixed(2));
     
    result.innerHTML = `<span>${bmi} </span>`;
     console.log(resGuide);
     
    resGuide.classList.remove("underweight", "normal", "overweight");
    result.classList.remove("underweight", "normal", "overweight");

    if (bmi > 24.9) {
      resGuide.innerHTML = "Overweight";
      resGuide.classList.add("overweight");
      result.classList.add("overweight");

    } else if (bmi < 18.6) {
      resGuide.innerHTML = "Underweight";
      resGuide.classList.add("underweight");
      result.classList.add("underweight");

           
    } else {
      resGuide.innerHTML = "Normal";
      resGuide.classList.add("normal");
      result.classList.add("normal");

    }
  }
});
