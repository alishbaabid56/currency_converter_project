#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.red.bold.bgCyanBright("WELLCOME.......My currency converter project"));
console.log(chalk.yellow.bold.bgRedBright("*********Created by Alishba Abid***********"));
const converterCurrency = {
    USD: 1,
    CAD: 1.27,
    Euro: 0.83,
    JPY: 110.55,
    IND: 75.20,
    PKR: 175.50,
    AUD: 1.34, //australia
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: (chalk.white.bgBlackBright("Please select currency from?")),
        type: "list",
        choices: ["USD", "CAD", "Euro", "JPY", "IND", "PKR", "AUD"]
    },
    {
        name: "to",
        message: (chalk.white.bgBlackBright(" Please select currency to?")),
        type: "list",
        choices: ["USD", "CAD", "Euro", "JPY", "IND", "PKR", "AUD"]
    },
    {
        name: "amount",
        message: (chalk.yellowBright.bgGray("Please Enter your Amount ")),
        type: "number",
    }
]);
let fromAmount = converterCurrency[userAnswer.from];
let toAmount = converterCurrency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount; //USD base currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
console.log(chalk.bgBlueBright.underline("*******THANK YOU.......for using my currency converter project*******"));
;
