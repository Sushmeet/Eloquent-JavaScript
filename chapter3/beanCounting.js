/**
 * Created by sushi on 13/02/16.
 */


function countBs(str) {
     countbss = 0;
    for(i = 0; i < str.length; i++ ) {
        if (str.charAt(i) === 'B') {
            countbss ++
        }
    }
    return countbss
}

// console.log(countBs('ozoB'))


function countChar(str,char) {
    countbss = 0;
    for(i = 0; i < str.length; i++ ) {
        if (str.charAt(i) === char) {
            countbss ++
        }
    }
    return countbss
}

console.log(countChar('zoeudezz','d'))
