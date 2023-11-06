function Prime(number) {
    if (number < 2) {
        return false;
    }

    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

var userNumber = prompt("Enter a number:");
var result = Prime(parseInt(userNumber));

if (result) {
    console.log(userNumber + " is a prime number.");
} else {
    console.log(userNumber + " is not a prime number.");
}
