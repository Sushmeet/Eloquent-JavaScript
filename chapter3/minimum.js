/**
 * Created by sushi on 13/02/16.
 */

/* The previous chapter introduced the standard function Math.min that returns its smallest argument.
 We can do that ourselves now. Write a function min that takes two arguments and returns their minimum.
  */

function minimum(value1, value2) {
    var min = 0;
    if (value1 < value2) {
        min = value1
    }
    else {
        min = value2;
    }
    return min;
}

console.log(minimum(0,10));

console.log(minimum(0,-10));


