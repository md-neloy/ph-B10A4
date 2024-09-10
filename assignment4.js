
function calculateTax(income, expense) {
  if (income <= 0 || expense > income || expense <= 0) {
    return "Invalid Input";
  }

  return (income - expense) * 0.2;
}

function sendNotification(email) {
  if (email.includes("@") != true) return "Invalid Email";

  return `${email.split("@")[0]} sent you an email from ${email.split("@")[1]}`;
}

function checkDigitsInName(name) {
  if (typeof name != "string") return "Invalid Input";

  for (let ch of name) {
    if ((ch >= "0" && ch <= "9") === true) return "true ";
  }

  return "false";
}

function calculateFinalScore(obj) {
  if (typeof obj != "object" || Array.isArray(obj) === true)
    return "Invalid Input";

  let parentScore = 0;

  if (obj.isFFamily) {
    parentScore = 20;
  }

  if (obj.testScore + obj.schoolGrade + parentScore >= 80) {
    return "true";
  } else return "false";
}

function waitingTime(waitingTimes, serialNumber) {
  if (Array.isArray(waitingTimes) != true || typeof serialNumber != "number") {
    return " Invalid Input";
  }

  let waitingPeople = serialNumber - waitingTimes.length - 1;

  let sumOfTime = 0;

  for (let time of waitingTimes) {
    sumOfTime += time;
  }

  let avgwaitingTime = Math.round(sumOfTime / waitingTimes.length);

  return waitingPeople * avgwaitingTime;
}
