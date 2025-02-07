//Step 1: Declaring Arrays
console.log("Step 1: Declaring Arrays");


let currency = ["USD", "CAD", "JPY", "EUR", "GBP"];

console.log(currency);

//Step 2: Accessing Arrays
console.log("Step 2: Accessing Arrays");


let AmericanDollars = currency[0];
let JapaneseYen = currency[2];
let GreatBritishPounds = currency[currency.length - 1];

console.log(AmericanDollars);
console.log(JapaneseYen);
console.log(GreatBritishPounds);

//Step 3: Using Array Properties
console.log("Step 3: Using Array Properties");


console.log(currency.length);

//Step 4: Array Methods
console.log("Step 4: Array Methods");

currency.push("KWD");

console.log(currency);

let NorthAmericanCurrencies = currency.slice(0, 2);

console.log(NorthAmericanCurrencies);

let KuwaitiDinars = currency.pop()

console.log(KuwaitiDinars);
console.log(currency);

//Step 5: Iterating Through Arrays
console.log("Step 5: Iterating Through Arrays");


currency.forEach((value, index) => {
    console.log(`${index} : ${value}`);

}
)

for (let i = 0; i < currency.length; i++) {
    console.log(currency[i]);

}

//Step 6: Array Destructuring
console.log("Step 6: Array Destructuring");



let [firstCurrency, secondCurrency, ...otherCurrencies] = currency;

console.log(firstCurrency);
console.log(secondCurrency);
console.log(otherCurrencies);








