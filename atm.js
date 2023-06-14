let balance = 5000;
let pin = 123;

function withdraw(amount) {
    if (balance >= amount) {
        balance = balance - amount;
        console.log(`Emeliyyat ugurla heyata kecirildi ${amount} Azn hesabdan coxarildi hesab ${balance}`);
    } else {
        console.log("Hesabda yeterince mebleg (AZN) yoxdur");
    }
}

function toPutIn(amount) {
    balance = balance + amount;
    console.log(`Emelliyyat ugurla heyat kecirildi ${amount} AZN hesaba elave edildi hesab ${balance} AZN`);
}

function viewBalance() {
    console.log(`Sizin balansiniz ${balance} AZN`);
}

function resetPin() {
    let oldpin = Number(prompt("Kohne PIN kodunuzu yazin: "));
    if (pin === oldpin) {
        let newPin = Number(prompt("Yeni PIN kodunuzu yazin: "));
        pin = newPin;
        console.log(`Pin kodunuz ugurla yenilendi yeni pin kodunuz: ${pin}`);
    } else {
        console.log("Pin yalnis daxil edilib");
    }
}

while (true) {
 let option = prompt("ATM e xos geldiniz. Funksiyani secin (1 - Balansin yoxlanisi, 2 - Hesabdan cixaris, 3 - Hesaba Medaxil, 4 - PIN-i deyisdirmek, 5 - Cixis):");

  if (option === "1") {
    viewBalance();
  } else if (option === "2") {
    let amount = Number(prompt("Cixartmaq istediyiniz miqdari girin: "));
    withdraw(amount);
  } else if (option === "3") {
    let amount = Number(prompt("Elave etmek isdediyiniz miqdari girin: "));
    toPutIn(amount);
  } else if (option === "4") {
    resetPin();
  } else if (option === "5") {
    console.log("ATM-dan cixildi.");
    break;
  } else {
    console.log("Duzgun reqem secin");
  }
}
