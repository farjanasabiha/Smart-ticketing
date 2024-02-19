let count = 0;
let totalAmount = 0;
let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");
let a4 = document.getElementById("a4");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");

let amount = document.getElementById("amount");

let seatName = document.getElementById("seatName");
let seatClass = document.getElementById("seatClass");
let seatPrice = document.getElementById("seatPrice");

let seatName2 = document.getElementById("seatName2");
let seatClass2 = document.getElementById("seatClass2");
let seatPrice2 = document.getElementById("seatPrice2");

let seatName3 = document.getElementById("seatName3");
let seatClass3 = document.getElementById("seatClass3");
let seatPrice3 = document.getElementById("seatPrice3");

let seatName4 = document.getElementById("seatName4");
let seatClass4 = document.getElementById("seatClass4");
let seatPrice4 = document.getElementById("seatPrice4");

let seatName5 = document.getElementById("seatName5");
let seatClass5 = document.getElementById("seatClass5");
let seatPrice5 = document.getElementById("seatPrice5");

let seatName6 = document.getElementById("seatName6");
let seatClass6 = document.getElementById("seatClass6");
let seatPrice6 = document.getElementById("seatPrice6");

let seatName7 = document.getElementById("seatName7");
let seatClass7 = document.getElementById("seatClass7");
let seatPrice7 = document.getElementById("seatPrice7");

let seatName8 = document.getElementById("seatName8");
let seatClass8 = document.getElementById("seatClass8");
let seatPrice8 = document.getElementById("seatPrice8");

let seatCount = document.getElementById("seatCount");
let grandTotal = document.getElementById("grandTotal");
let allSeat = document.getElementById("allSeat");
let totalSeat = 40;
allSeat.innerHTML = totalSeat + " Seats left";

a1.addEventListener("click", () => {
  if (count < 4) {
    a1.classList.toggle("buttonColor");
    seatName.innerHTML = a1.innerHTML;
    seatClass.innerHTML = "Economoy";
    seatPrice.innerHTML = "550";
    totalAmount += 550;
    amount.innerHTML = totalAmount;
    count++;
    seatCount.innerHTML = count;
    grandTotal.innerHTML = totalAmount;
    totalSeat--;
    allSeat.innerHTML = totalSeat + " Seats left";
  }
});

a2.addEventListener("click", () => {
  if (count < 4) {
    a2.classList.toggle("buttonColor");
    seatName2.innerHTML = a2.innerHTML;
    seatClass2.innerHTML = "Economoy";
    seatPrice2.innerHTML = "550";
    totalAmount += 550;
    amount.innerHTML = totalAmount;
    count++;
    seatCount.innerHTML = count;
    grandTotal.innerHTML = totalAmount;
    totalSeat--;
    allSeat.innerHTML = totalSeat + " Seats left";
  }
});
a3.addEventListener("click", () => {
  if (count < 4) {
    a3.classList.toggle("buttonColor");
    seatName3.innerHTML = a3.innerHTML;
    seatClass3.innerHTML = "Economoy";
    seatPrice3.innerHTML = "550";
    totalAmount += 550;
    amount.innerHTML = totalAmount;
    count++;
    seatCount.innerHTML = count;
    grandTotal.innerHTML = totalAmount;
    totalSeat--;
    allSeat.innerHTML = totalSeat + " Seats left";
  }
});
a4.addEventListener("click", () => {
  if (count < 4) {
    a4.classList.toggle("buttonColor");
    seatName4.innerHTML = a4.innerHTML;
    seatClass4.innerHTML = "Economoy";
    seatPrice4.innerHTML = "550";
    totalAmount += 550;
    amount.innerHTML = totalAmount;
    count++;
    seatCount.innerHTML = count;
    grandTotal.innerHTML = totalAmount;
    totalSeat--;
    allSeat.innerHTML = totalSeat + " Seats left";
  }
});
b1.addEventListener("click", () => {
  if (count < 4) {
    b1.classList.toggle("buttonColor");
    seatName5.innerHTML = b1.innerHTML;
    seatClass5.innerHTML = "Economoy";
    seatPrice5.innerHTML = "550";
    totalAmount += 550;
    amount.innerHTML = totalAmount;
    count++;
    seatCount.innerHTML = count;
    grandTotal.innerHTML = totalAmount;
    totalSeat--;
    allSeat.innerHTML = totalSeat + " Seats left";
  }
});
b2.addEventListener("click", () => {
  if (count < 4) {
    b2.classList.toggle("buttonColor");
    seatName6.innerHTML = b2.innerHTML;
    seatClass6.innerHTML = "Economoy";
    seatPrice6.innerHTML = "550";
    totalAmount += 550;
    amount.innerHTML = totalAmount;
    count++;
    seatCount.innerHTML = count;
    grandTotal.innerHTML = totalAmount;
    totalSeat--;
    allSeat.innerHTML = totalSeat + " Seats left";
  }
});
b3.addEventListener("click", () => {
  if (count < 4) {
    b3.classList.toggle("buttonColor");
    seatName7.innerHTML = b3.innerHTML;
    seatClass7.innerHTML = "Economoy";
    seatPrice7.innerHTML = "550";
    totalAmount += 550;
    amount.innerHTML = totalAmount;
    count++;
    seatCount.innerHTML = count;
    grandTotal.innerHTML = totalAmount;
    totalSeat--;
    allSeat.innerHTML = totalSeat + " Seats left";
  }
});

b4.addEventListener("click", () => {
  if (count < 4) {
    b4.classList.toggle("buttonColor");
    seatName8.innerHTML = b4.innerHTML;
    seatClass8.innerHTML = "Economoy";
    seatPrice8.innerHTML = "550";
    totalAmount += 550;
    amount.innerHTML = totalAmount;
    count++;
    seatCount.innerHTML = count;
    grandTotal.innerHTML = totalAmount;
    totalSeat--;
    allSeat.innerHTML = totalSeat + " Seats left";
  }
});
