'use strict';
let money = prompt('“Ваш месячный доход?”');
let income;
let mission = 600000;
let deposit = Boolean(prompt('“Есть ли у вас депозит в банке?”'));
let addExpenses = prompt('“Перечислите возможные расходы за рассчитываемый период через запятую”');
let period;
let expenses1 = prompt('“Введите обязательную статью расходов?”');
 let expenses2 = prompt('“Введите обязательную статью расходов?”');
 let amount1 = prompt('“Во сколько это обойдется?”');
 let damount2 = prompt('“Во сколько это обойдется?”');
  console.log(money);
  console.log(income); 
  console.log(deposit); 
  console.log(typeof money);
  console.log(typeof income);
  console.log(typeof deposit);

  console.log(addExpenses.length);

  console.log('"Период равен'+' '+ period +' '+'месяцев” и “Цель заработать' +' '+ mission + ' '+'рублей"');

console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(' '));

 let budgetMonth = money - addExpenses;

console.log('Бюджет на месяц'+ budgetMonth);

let missionPeriod = mission / budgetMonth;

console.log('Бюджет на месяц'+ missionPeriod);


let MPeriod = Math.ceil(missionPeriod);

console.log('Цель будет достигнута за:'+ missionPeriod + 'месяца');

function getAccumulatedMonth(){
return money - addExpenses;
}

let accumulatedMonth =  getAccumulatedMonth();

let budgetDay = accumulatedMonth / 30;

console.log('Бюджет на день:'+ budgetDay);

function getStatusIncome(){

if(budgetDay>=1200){
  console.log('“У вас высокий уровень дохода”');
}else if(1200>budgetDay>600){
  console.log('“У вас средний уровень дохода”');
}else if(600>budgetDay>0){
  console.log('“К сожалению у вас уровень дохода ниже среднего”');
}else{
  console.log('“Что то пошло не так”');
}
}

function getExpensesMonth(amount1, damount2){
  return amount1 + damount2;
  
}

function getTargetMonth(){
  return  mission / accumulatedMonth;
}

console.log(budgetDay);

getStatusIncome();