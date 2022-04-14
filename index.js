"use strict"

const daily = document.getElementById("daily-btn");
const weekly = document.getElementById("weekly-btn");
const monthly = document.getElementById("monthly-btn");



const dayarr = document.querySelectorAll(".daily");
const weekarr = document.querySelectorAll(".weekly");
const montarr = document.querySelectorAll(".monthly");



daily.addEventListener("click", () => {
    dayarr.forEach((arr) => { 
        arr.classList.Add("active");      
    });
});



weekly.addEventListener("click", () => {
    weekarr.forEach((arr) => {
        arr.classList.add("active");

    });
});

monthly.addEventListener("click", () => {
    montarr.forEach((arr) => {
        arr.classList.add("active");
    });
});

