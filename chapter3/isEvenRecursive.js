/**
 * Created by sushi on 13/02/16.
 */



function isEven(num) {

    statusOfNum = '';
    if (num === 0) {
        statusOfNum = 'even';
    }

    else if (num === 1) {
        statusOfNum = 'odd'
    }

    else {
        isEven(num -2)
    }

    return statusOfNum

}


console.log(isEven(20))