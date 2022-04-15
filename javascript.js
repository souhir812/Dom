var plusBtns = Array.from(document.querySelectorAll(".plus-btn"));
var minusBtns = Array.from(document.querySelectorAll(".minus-btn"));
var nbrtot = Array.from( document.querySelectorAll(".total-qty"));
var removeBtns = Array.from(document.querySelectorAll(".fa-trash-alt"));
var hearts = Array.from(document.querySelectorAll(".fa-heart"));
var total = document.querySelector(".total-price")
var cards =  Array.from(document.querySelectorAll(".card"));



function totalPrice() {
  console.log("Hello")
  var quantities = Array.from(document.querySelectorAll(".qty"));
  var unitPrices = Array.from(document.querySelectorAll(".unit-price"));
  console.log(quantities)
console.log(unitPrices)
    let sum = 0;
    for (let i=0; i< quantities.length;i++) {
      sum = sum + unitPrices[i].innerText * quantities[i].innerText;
    }
    total.innerText = sum;
  }





// increment decrement

for (let i = 0; i < cards.length; i++) {
   plusBtns[i].addEventListener("click", function () {
    plusBtns[i].nextElementSibling.innerText++;
    totalPrice()
    
  });
  minusBtns[i].addEventListener("click", function () {
    if (minusBtns[i].previousElementSibling.innerText > 0) {
      minusBtns[i].previousElementSibling.innerText--;
      totalPrice()
    }
  });
}




// remove card
for (let i in removeBtns) {
  removeBtns[i].addEventListener("click", function () {
    cards[i].remove();
    totalPrice();
  });
}









