'use strict';

  let income;
  let deposit = confirm('“Есть ли у вас депозит в банке?”');
  let addExpenses = prompt('“Перечислите возможные расходы за рассчитываемый период через запятую”');
  let expenses1 = prompt('“Введите обязательную статью расходов?”');
 let expenses2 = prompt('“Введите обязательную статью расходов?”');
 let amount1 = prompt('“Во сколько это обойдется?”');
 let damount2 = prompt('“Во сколько это обойдется?”');
 let period;
 let mission;
let money = prompt('“Ваш месячный доход?”');
  console.log(income); 
  console.log(deposit); 

  console.log(typeof money);
  console.log(typeof income);
  console.log(typeof deposit);

  console.log(addExpenses.length);

  console.log('"Период равен'+' '+ period +' '+'месяцев” и “Цель заработать' +' '+ mission + ' '+'рублей"');

console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(' '));

 let budgetDay = money / 30;
console.log(budgetDay);

console.log(money);
 
 let budgetMonth = money - addExpenses;

console.log('Бюджет на месяц'+ budgetMonth);

let missionPeriod = mission / budgetMonth;

console.log('Бюджет на месяц'+ missionPeriod);

let MPeriod = Math.ceil(missionPeriod);

console.log('Цель будет достигнута за:'+ missionPeriod + 'месяца');

budgetDay = budgetMonth / 30;

console.log('Бюджет на день:'+ budgetDay);

if(budgetDay>=1200){
  console.log('“У вас высокий уровень дохода”');
}else if(1200>budgetDay>600){
  console.log('“У вас средний уровень дохода”');
}else if(600>budgetDay>0){
  console.log('“К сожалению у вас уровень дохода ниже среднего”');
}else{
  console.log('“Что то пошло не так”');
}









