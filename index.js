// Code your solutions in this file
/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bowl`);
    }

    return gifts
}

wrapGifts(gifts); */

const names = ["Charlie", "Samip", "Ali"];

function writeCards(names, event) {
    
    const message = [];

    for (let i = 0; i < names.length; i++) {
        
        message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return message;
}

console.log(writeCards(names, "birthday"));

function countDown (n) {
    while (n > -1) {
        console.log(n);
        n--;
    }
}