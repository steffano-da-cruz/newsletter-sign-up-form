"use strict";

const subscriptionInp = document.querySelector(".subscription-input");
const subscriptionBtn = document.querySelector(".subscription-button");
const subscriptionCont = document.querySelector(".subscription-container");
const successEmail = document.querySelector(".success-email");
const successBtn = document.querySelector(".success-button");
const successCont = document.querySelector(".success-container");
const errorMessage = document.querySelector(".error-message");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let inputValue = "";

const switchCont = function () {
  subscriptionCont.classList.toggle("hidden");
  successCont.classList.toggle("hidden");
};

const inputReset = function () {
  if (!errorMessage.classList.contains("hidden")) {
    errorMessage.classList.toggle("hidden");
    subscriptionInp.style.color = "#242742";
    subscriptionInp.style.borderColor = "#cecece";
    subscriptionInp.style.backgroundColor = "#ffffff";
  }
};

subscriptionBtn.addEventListener("click", function (e) {
  e.preventDefault();
  inputValue = subscriptionInp.value;

  if (emailRegex.test(inputValue)) {
    switchCont();
    successEmail.textContent = inputValue;
  } else {
    errorMessage.classList.remove("hidden");
    errorMessage.style.color = "#ff6257";
    subscriptionInp.style.color = "#ff6257";
    subscriptionInp.style.borderColor = "#ff6257";
    subscriptionInp.style.backgroundColor = "#ffa8a34d";
  }
});

subscriptionInp.addEventListener("click", inputReset);
subscriptionInp.addEventListener("keydown", inputReset);

successBtn.addEventListener("click", function () {
  switchCont();
  subscriptionInp.value = "";
  subscriptionInp.focus();
});
