/**
 * Created by michpenn on 10/28/15.
 */

function combo_problem1(number) {
    var numberArray = [];
    var rejectNumbers = [];
    for (var i = number; i <= 12; i++) {
        numberArray.push(i);
    }
    console.log(numberArray);
    var indexThis;
    for (var j = 0; j<numberArray.length; j++) {
        indexThis=(j+1);
        if ([indexThis]%3 == 0) {
            rejectNumbers.push(numberArray[j]);
            //numberArray.splice(j,1);
        }
    }
    console.log(rejectNumbers);
    console.log(numberArray);
}

combo_problem1(2);