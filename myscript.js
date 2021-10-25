const containerCard = document.getElementById("containerCard")

for (let i = 1; i<=1000; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        containerCard.innerHTML += `<div class= cardRed> fizzbuzz </div>`
    } else if (i % 5 === 0) {
        containerCard.innerHTML += `<div class= cardYellow> buzz </div>`
    } else if (i % 3 === 0) {
        containerCard.innerHTML += `<div class= cardGreen> fizz </div>`
    } else {
        containerCard.innerHTML += `<div class= card>${i}</div>`  
    }
}
