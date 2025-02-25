// Random Number Generator with Bias
function generateBiasedRandom() {
  const random = Math.random();
  // 30% higher probability for numbers between 50-100
  if (random < 0.7) {
    return Math.floor(Math.random() * 51) + 50; // 50-100
  } else {
    return Math.floor(Math.random() * 50); // 0-49
  }
}

// Update Measure Bar and Result Text
function updateResult(percentage) {
  const measureBar = document.querySelector('#measure-bar div');
  const resultText = document.querySelector('#result-text');

  measureBar.style.width = `${percentage}%`;

  if (percentage <= 10) {
    resultText.textContent = "0-10%: Not a match";
  } else if (percentage <= 20) {
    resultText.textContent = "11-20%: Barely a spark";
  } else if (percentage <= 30) {
    resultText.textContent = "21-30%: Meh";
  } else if (percentage <= 40) {
    resultText.textContent = "31-40%: Potential";
  } else if (percentage <= 50) {
    resultText.textContent = "41-50%: Getting there";
  } else if (percentage <= 60) {
    resultText.textContent = "51-60%: Pretty good";
  } else if (percentage <= 70) {
    resultText.textContent = "61-70%: Strong connection";
  } else if (percentage <= 80) {
    resultText.textContent = "71-80%: Great match";
  } else if (percentage <= 90) {
    resultText.textContent = "81-90%: Amazing chemistry";
  } else {
    resultText.textContent = "91-100%: Soulmates!";
  }
}

// Handle Button Click
document.getElementById('calculate-btn').addEventListener('click', () => {
  const name1 = document.getElementById('name1').value.trim();
  const name2 = document.getElementById('name2').value.trim();

  if (!name1 || !name2) {
    alert("Please enter both names!");
    return;
  }

  const percentage = generateBiasedRandom();
  updateResult(percentage);
});