/**
 * Created by michpenn on 10/28/15.
 */

function combo_problem1(number) {
    var numberArray = [];
    var rejectNumbers = [];
    for (var i = number; i <= 12; i++) {
        numberArray.push(i);
    }
    var indexThis;
    for (var j = 0; j < numberArray.length; j++) {
        indexThis = (j + 1);
        if ([indexThis] % 3 == 0) {
            rejectNumbers.push(numberArray[j]);
        }
    }

    for (var k = 0; k < numberArray.length; k++) {
        for (var l = 0; l < rejectNumbers.length; l++) {
            if (numberArray[k] == rejectNumbers[l]) {
                numberArray.splice(k, 1);
            }
        }
    }
    console.log(numberArray);
}

combo_problem1(2);