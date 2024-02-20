"use strict";

const subscriptionInp = document.querySelector(".subscription-input");
const subscriptionBtn = document.querySelector(".subscription-button");
const subscriptionCont = document.querySelector(".subscription-container");
const successCont = document.querySelector(".success-container");
const subscriptionError = document.querySelector(".subscription-error");

subscriptionBtn.addEventListener("click", function () {
  const inputValue = subscriptionInp.value;

  if (inputValue.includes("@")) {
    subscriptionCont.classList.toggle("hidden");
    successCont.classList.toggle("hidden");
  } else {
    subscriptionError.classList.toggle("hidden");
    subscriptionError.style.color = "#ff6257";
    subscriptionInp.style.color = "#ff6257";
    subscriptionInp.style.borderColor = "#ff6257";
    subscriptionInp.style.backgroundColor = "#ffa8a34d";
  }
});
