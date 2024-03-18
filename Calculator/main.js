import inquirer from 'inquirer';
const myCalc = await inquirer.prompt([
    {
        type: "list",
        name: "operation",
        message: "What operation you want to perfome?",
        choices: ["add", "subtract", "multipliy", "division"]
    },
    {
        type: "number",
        name: "num1",
        message: "Enter First Number?"
    },
    {
        type: "number",
        name: "num2",
        message: "Enter Second Number?"
    }
]);
if (myCalc.operation === "add") {
    console.log(myCalc.num1 + myCalc.num2);
}
else if (myCalc.operation === "subtract") {
    console.log(myCalc.num1 - myCalc.num2);
}
else if (myCalc.operation === "multipliy") {
    console.log(myCalc.num1 * myCalc.num2);
}
else {
    console.log(myCalc.num1 / myCalc.num2);
}
