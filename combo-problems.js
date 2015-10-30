/**
 * Created by michpenn on 10/28/15.
 */

/**
 * Problem 1
 * @param number
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

/**
 * Combo Problem 2
 * @param number
 */
function combo_problem2(number) {
    var array = [];

    for (var i = number; i < 13; i++) {
        if ((i % 3) == 0) {
            array.push(i);
        }
        else {
            array.push(0);
        }
    }
    console.log(array);
}

combo_problem2(2);

/**
 * Problem 3
 * @param number
 */
function combo_problem3(number) {
    var array_3 = [];
    var value1;
    var value2;
    var value3;
    var ispositive = true;
    var typeof3;

    for (var i = number; i < 5;) {
        for (var j = number; j < 6;) {
            value1 = i;
            value2 = j;
            typeof3 = typeof value3;


            if ((typeof3 == 'number' || typeof3 == 'undefined') && ispositive == true) {
                array_3.push(i * j);
                console.log('1. undefined and true');
            }

            else {
                array_3.push(-1 * (i * j));
                console.log('else');
            }
            value3 = (array_3.length - 1);
            j++;

            if ((typeof3 == 'number' || typeof3 == 'undefined') && ispositive == true) {
                array_3.push(i * j);
                console.log('2. number or undefined and true');
                ispositive = false;
            }
            else {
                array_3.push(-1 * (i * j));
                console.log('else');
                ispositive = true;
            }

            value3 = (array_3.length - 1);
            i++;
        }
    }
    console.log(array_3);
}

combo_problem3(2);

