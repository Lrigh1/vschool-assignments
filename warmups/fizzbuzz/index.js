function fizzBuzz(numberOfTimes){
    for (var i = 1; i < numberOfTimes; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log(i+':', 'fizzbuzz');
        }    
        else if (i % 3 === 0) {
            console.log(i+':', 'fizz');
        } 
        else if (i % 5 === 0) {
            console.log(i+':', 'buzz');
        } 
    };
}

fizzBuzz(100)