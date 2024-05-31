let num1, num2, operator, value,currentvalue,lastnumber,aye;

function generate(numbr) {
  const answer = numbr;
  value = parseFloat(answer);

  if (isNaN(value)) {
    alert('Please enter a valid number');
    return;
  }

  const operators = ['+', '-', '*', '/'];
  operator = operators[Math.floor(Math.random() * operators.length)];

  if (operator === '+') {
    num1 = Math.floor(Math.random() * value);
    num2 = value - num1;
  } else if (operator === '-') {
    num1 = value + Math.floor(Math.random() * value);
    num2 = num1 - value;
  } else if (operator === '*') {
    num1 = Math.floor(Math.random() * Math.sqrt(value));
    num2 = value / num1;
    if (num2 === 0 || !isFinite(num2) || !isFinite(num1)) {
      generateQuestion();
      return;
    }
  } else if (operator === '/') {
    num1 = value * Math.floor(Math.random() * 10 + 1); // Ensure num1 is not zero
    num2 = num1 / value;
    if (num2 === 0 || !isFinite(num2) || !isFinite(num1)) {
      generateQuestion();
      return;
    }
  }

  let question = '';

  if (operator === '+') {
    question = `${num1} + ${num2}`;
  } else if (operator === '-') {
    question = `${num1} - ${num2}`;
  } else if (operator === '*') {
    question = `${num1} * ${num2}`;
  } else if (operator === '/') {
    question = `${num1} / ${num2}`;
  }
   return question
}

function generateQuestion() {
  let question;

  while (!question || question.includes("undefined")) {
    const mutiplier = Math.floor(Math.random() * 10 + 1);
    const chance = Math.random();

    if (chance <= 0.1) { // 10% chance for each formula
      currentvalue = generate(document.getElementById('answer').value * mutiplier);
      lastnumber = document.getElementById('answer');
      aye = generate(lastnumber.value * (mutiplier - 1));
      question = `(${currentvalue}) - (${aye})`;
    } else if (chance <= 0.2) { // Another 10% chance
      currentvalue = generate(-document.getElementById('answer').value * (mutiplier - 1));
      lastnumber = document.getElementById('answer');
      aye = generate(lastnumber.value * mutiplier);
      question = `(${currentvalue}) + (${aye})`;
    } else if (chance <= 0.3) { // Another 10% chance
      currentvalue = generate(document.getElementById('answer').value * mutiplier);
      lastnumber = document.getElementById('answer');
      aye = generate(lastnumber.value / mutiplier);
      question = `(${currentvalue}) * (${aye})`;
    }
  }

  document.getElementById('formula').textContent = question;
}

