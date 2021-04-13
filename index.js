// Code your solutions in this file
function writeCards(namesArray, event) {
    let thankyouCards = []
    for( let i = 0; i < namesArray.length; i++) {
        thankyouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return thankyouCards
}


function countDown( x ) {
    while ( x > 0 ) {
        console.log( x );
        x -= 1;
    }
    console.log(x);
}