let balance = 5000;
let pin = 123;

function withdraw(amount) {
    if (balance >= amount) {
        balance = balance - amount;
        alert(`Emeliyyat ugurla heyata kecirildi ${amount} Azn hesabdan coxarildi hesab ${balance}`);
    } else {
        alert("Hesabda yeterince mebleg (AZN) yoxdur");
    }
}

function toPutIn(amount) {
    balance = balance + amount;
    alert(`Emelliyyat ugurla heyat kecirildi ${amount} AZN hesaba elave edildi hesab ${balance} AZN`);
}

function viewBalance() {
    alert(`Sizin balansiniz ${balance} AZN`);
}

function resetPin() {
    let oldpin = Number(prompt("Kohne PIN kodunuzu yazin: "));
    if (pin === oldpin) {
        let newPin = Number(prompt("Yeni PIN kodunuzu yazin: "));
        pin = newPin;
        alert(`Pin kodunuz ugurla yenilendi yeni pin kodunuz: ${pin}`);
    } else {
        alert("Pin yalnis daxil edilib");
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
        alert("ATM-dan cixildi.");
        break;
    } else {
        alert("Duzgun reqem secin");
    }
}
