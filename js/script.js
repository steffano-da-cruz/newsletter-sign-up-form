"use strict";

const subscriptionInp = document.querySelector(".subscription-input");
const subscriptionBtn = document.querySelector(".subscription-button");

subscriptionBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const inputValue = subscriptionInp.value;
  console.log(inputValue);
});
