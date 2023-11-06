function table() {
    var input = prompt("Enter a number for display table");
  
    if(input !== null) {
        var number = parseInt(input);
        for (var i = 1; i <= 10; i++) {
            var result = i * number;
            document.write(`${number} x ${i} = ${result} <br>`);
        }
    } else {
        document.write("Invalid input");
    }
  }
  
  table();