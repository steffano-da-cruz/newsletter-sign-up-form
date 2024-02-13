"use strict";

const subscriptionInp = document.querySelector(".subscription-input");
const subscriptionBtn = document.querySelector(".subscription-button");

subscriptionBtn.addEventListener("click", function () {
  const inputValue = subscriptionInp.value;
  console.log(inputValue);
});
