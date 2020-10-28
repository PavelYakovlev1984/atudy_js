'use strict';
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let money, 
    income = 'фриланс',
    addExpenses = prompt('Перечислите возможные расходы через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 50000,
    period = 6;

    let start = function() {
        do {        
        money = prompt('Ваш месячный доход');
        }
        while (!isNumber(money)) 
    };

    start();

let showTypeOf = function (data) {
    console.log(typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
showTypeOf(addExpenses);

let expenses = [];

console.log(addExpenses.toLowerCase().split(', '));

//обязатльные расходы за месяц:
function getExpensesMonth() {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        expenses[i] = prompt('Введите обязательную статью расходов');
            while (expenses[i].trim() === '' || expenses[i] === null) {
                expenses[i] = prompt('Введите обязательную статью расходов');
                }                                  
        sum += +prompt('Во сколько это обойдется?');
            while (!isNumber(sum)) {
                sum += +prompt('Во сколько это обойдется?');   
            } 
        }
    console.log(expenses);
    return sum;
};

let expensesAmount = getExpensesMonth();

console.log ('Расходы за месяц: ' + expensesAmount);

//накопления в месяц
function getAccumulatedMonth() {
    return (money - expensesAmount);
};
console.log (getAccumulatedMonth());

let accumulatedMonth = getAccumulatedMonth();

function getTatghetMonth () {           
    return mission/accumulatedMonth;
};

function showGoal() {
    if (getTatghetMonth() <= 0) {
        console.log('Цель не будет достигнута');
    } else {
        console.log('Цель будет достигнута за ' + getTatghetMonth() + ' мес.'); 
    }
};
showGoal();
//бюджет на день
let budgetDay = (accumulatedMonth/30);
console.log('Бюджет на день: ' + Math.floor(budgetDay));

let getStatusIncome = function() {
    if (budgetDay>=1200) {
        console.log('У вас высокий уровень дохода');
    } else if (budgetDay>=600 && budgetDay<1200 ) {
        console.log('У вас средний уровень дохода');
    } else if (budgetDay<600 && budgetDay>=0) {
        console.log('К сожалению, у вас уровень дохода ниже среднего');
    } else {
        console.log('Что-то пошло не так');
    }
};

getStatusIncome();

