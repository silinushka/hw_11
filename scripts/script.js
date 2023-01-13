const questionlength = Math.round(prompt('Введіть бажану довжину масиву'));
const question = prompt("Ввіедіть елементи масиву без пробілу");

if ((question === ('') || question === null || question.includes(' '))){
  alert ('Помилка')
}
else if ((questionlength <= 0 || Number.isNaN(questionlength) || questionlength === ('') || questionlength === null )){
  alert ('Помилка довжини масиву')
}
else {
  const arr = (question || "").split("");
  arr.length = (questionlength);
  alert (`Ваш масив ${arr}`);
  arr.sort((a, b) => a - b);
  alert (`Ваш масив за зростанням ${arr}`);
  arr.splice(2,3).join('');
  alert (`Ваш масив з видаленими елементами з 2 по 4 (включно!) ${arr}`);
}