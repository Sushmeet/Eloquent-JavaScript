/* Write a loop that makes seven calls to console.log to output the following triangle:

 #
 ##
 ###
 ####
 #####
 ######
 #######  */

function triangle() {
    for (var i = '#'; i.length < 8; i += '#') {
        console.log(i)
    }
}

triangle()
