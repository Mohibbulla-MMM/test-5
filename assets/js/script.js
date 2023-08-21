const totalPrice = document.getElementById("total-price");
const cardTotalPriceButton = document.getElementById("card-purchase");
const cuponBtn = document.getElementById("cupon");
const cuponInput = document.getElementById("cupon-input");
let cardTitle = document.getElementById("user-item-select-title");
let totalPriceCounter = 0;

// ================================totalPrice set funtion ================================
function totalPriceSet(price) {
  let totalPriceTagConvet = priceConveter("total-price");
  let sum = totalPriceTagConvet + price;
  let sumFised = sum.toFixed(2);
  let sumFisedConvert = parseFloat(sumFised);
  totalPrice.innerText = sumFisedConvert;
  totalPriceButton(sumFisedConvert);
  cupon(sumFisedConvert);
  // cuponApplyBtn(sumFisedConvert);
  totalPriceCounter = sumFisedConvert;
}

// ================================purchase funtion ================================
function totalPriceButton(value) {
  if (value > 0) {
    cardTotalPriceButton.removeAttribute("disabled");
    cardTotalPriceButton.classList.add("active");
    cardTotalPriceButton.classList.remove("deactive");
  } else {
    console.log("disabled");
    cardTotalPriceButton.setAttribute("disabled", true);
    cardTotalPriceButton.classList.remove("active");
    cardTotalPriceButton.classList.add("deactive");
  }
}
// ----------------------- modal show -------------------------------
cardTotalPriceButton.addEventListener("click", function () {
  const modal = document.getElementById("my-mm-modal");
  modal.style.display = "block";
});
// ----------------------- modal hidden-------------------------------
document.getElementById("modal-btn").addEventListener("click", function () {
  const modal = document.getElementById("my-mm-modal");
  modal.style.display = "none";
  location.href = "index.html";
});
// ================================cupon active btn function  ==============================
function cupon(value) {
  if (value >= 200) {
    cuponBtn.classList.add("active");
    cuponBtn.classList.remove("deactive");
    cuponBtn.removeAttribute("disabled", true);
    cuponInput.removeAttribute("readonly", true);
  } else {
    cuponBtn.classList.remove("active");
    cuponBtn.classList.add("deactive");
    cuponBtn.setAttribute("disabled", true);
  }
}
// ======================== cupon apply button =========================
document.getElementById("cupon").addEventListener("click", function () {
  const discount = document.getElementById("discount");
  const total = document.getElementById("total");
  if (cuponInput.value === "SELL200") {
    let calculationDiscount = (totalPriceCounter / 100) * 20;
    discount.innerText = calculationDiscount.toFixed(2);
    let calculationTotla = totalPriceCounter - calculationDiscount;
    total.innerText = calculationTotla.toFixed(2);
    alert("Your cupon successfull");
  } else {
    alert("Your cupon Wrong \nwrite cupon here\nSELL200");
    console.log(totalPriceCounter);
  }
});

// ================================text convert number funtion ================================
function priceConveter(id) {
  let priceId = document.getElementById(id);
  let priceValue = priceId.innerText;
  let priceConvertNumber = parseFloat(priceValue);
  let priceValueFixed = priceConvertNumber.toFixed(2);
  let newPriceConvert = parseFloat(priceValueFixed);
  return newPriceConvert;
}
function titleCreate(id) {
  let chaildCounter = cardTitle.childElementCount;
  let titleId = document.getElementById(id);
  let titleIdValue = titleId.innerText;
  let h2 = document.createElement("h2");
  h2.classList.add("font-medium", "mb-2");
  h2.innerText = `${chaildCounter + 1}. ${titleIdValue}`;
  cardTitle.appendChild(h2);
}
// ================================modal function ==========================

// ========== card 1 ==============

document.getElementById("card-1").addEventListener("click", function () {
  const productConvert = priceConveter("card-price-1");
  titleCreate("card-title-1");
  totalPriceSet(productConvert);
});

// ========== card 2 ==============
document.getElementById("card-2").addEventListener("click", function () {
  const productConvert = priceConveter("card-price-2");
  titleCreate("card-title-2");
  totalPriceSet(productConvert);
});

// ========== card 3 ==============
document.getElementById("card-3").addEventListener("click", function () {
  const productConvert = priceConveter("card-price-3");
  titleCreate("card-title-3");
  totalPriceSet(productConvert);
});
// ========== card 4 ==============
document.getElementById("card-4").addEventListener("click", function () {
  const productConvert = priceConveter("card-price-4");
  titleCreate("card-title-4");
  totalPriceSet(productConvert);
});
// ========== card 5 ==============
document.getElementById("card-5").addEventListener("click", function () {
  const productConvert = priceConveter("card-price-5");
  titleCreate("card-title-5");
  totalPriceSet(productConvert);
});
// ========== card 6 ==============
document.getElementById("card-6").addEventListener("click", function () {
  const productConvert = priceConveter("card-price-6");
  titleCreate("card-title-6");
  totalPriceSet(productConvert);
});
