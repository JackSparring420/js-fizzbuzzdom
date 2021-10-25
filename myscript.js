const containerCard = document.getElementById("containerCard")

for (let i = 1; i<=1000; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        containerCard.innerHTML += `<div class= red> fizzbuzz </div>`
    } else if (i % 5 === 0) {
        containerCard.innerHTML += `<div class= yellow> buzz </div>`
    } else if (i % 3 === 0) {
        containerCard.innerHTML += `<div class= green> fizz </div>`
    } else {
        containerCard.innerHTML += `<div class= card>${i}</div>`  
    }
}
