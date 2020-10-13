

let money =45000;

let income = 'freelance';

 let addExpenses = 'Rent, Meal, Fuel';  
 let deposit = false;
 let mission = 600000;
 let period =12;
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

let budgetDay = 0;
budgetDay = money / 30;
console.log(budgetDay);


 money = prompt('“Ваш месячный доход?”');


 addExpenses = prompt('“Перечислите возможные расходы за рассчитываемый период через запятую”');

 deposit = Boolean(prompt('“Есть ли у вас депозит в банке?”'));

 expenses1 = prompt('“Введите обязательную статью расходов?”');
 expenses2 = prompt('“Введите обязательную статью расходов?”');
 amount1 = prompt('“Во сколько это обойдется?”');
 damount2 = prompt('“Во сколько это обойдется?”');


 let budgetMonth = 0;
 
 budgetMonth = money - addExpenses;

console.log('Бюджет на месяц'+ budgetMonth);

let missionPeriod = mission / udgetMonth;

console.log('Бюджет на месяц'+ missionPeriod);


let MPeriod = Math.ceil(missionPeriod);

console.log('Цель будет достигнута за:'+ missionPeriod + 'месяца');



budgetDay = udgetMonth / 30;

console.log('Бюджет на день:'+ budgetDay);

let n = budgetDay;

if(n>=1200){
  console.log('“У вас высокий уровень дохода”');
}else if(1200>n>600){
  console.log('“У вас средний уровень дохода”')
}else if(600>n>0){
  console.log('“К сожалению у вас уровень дохода ниже среднего”')
}else{
  console.log('“Что то пошло не так”')
}









