"use strict";

const account1 = {
  owner: "Dmitrii Fokeev",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  pin: 1111,
};

const account2 = {
  owner: "Anna Filimonova",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  pin: 2222,
};

const account3 = {
  owner: "Polina Filimonova",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  pin: 3333,
};

const account4 = {
  owner: "Stanislav Ivanchenko",
  movements: [430, 1000, 700, 50, 90],
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

//
function displayMovements(movements) {
  containerMovements.innerHTML = "";

  movements.forEach(function (amount, index) {
    const type = amount > 0 ? "deposit" : "withdrawal";
    const operationName = amount > 0 ? "Зачисление" : "Снятие";
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${index+1} ${operationName}</div>
        <div class="movements__date">3 дня назад</div>
        <div class="movements__value">${amount}₽</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
}

displayMovements(account1.movements);

//
function createLogIn(accs) {
  accs.forEach(function(acc) {
    acc.logIn = acc.owner.toLowerCase().split(' ').map(item => item[0]).join('');
  })
}

createLogIn(accounts);

//
function calcPrintBalance(movements) {
  labelBalance.textContent = movements.reduce(function(acc, val) {
    return acc + val;
  }) + '₽';
}

calcPrintBalance(account1.movements);