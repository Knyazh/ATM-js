while (true) {
    let firstValue = Number(prompt("Enter first number: "));
    let operation = prompt("Enter arithmetic operator: ");
    let secondValue = Number(prompt("Enter second number: "));
    let totalValue;
  
    if (operation === "+") {
      totalValue = firstValue + secondValue;
      console.log(`Total = ${totalValue}`);

    } else if (operation === "-") {
      totalValue = firstValue - secondValue;
      console.log(`Total = ${totalValue}`);

    } else if (operation === "*") {
      totalValue = firstValue * secondValue;
      console.log(`Total = ${totalValue}`);

    } else if (operation === "/") {
      totalValue = firstValue / secondValue;
      console.log(`Total = ${totalValue}`);
      
    } else {
      console.log("Invalid arithmetic operator");
    }
  
    let continueCalculation = prompt("Do you want to perform another calculation? (Y/N)");
  
    if (continueCalculation.toUpperCase() !== "Y") {
      break;
    }
  }