const daily = document.getElementById("daily-btn");
const weekly = document.getElementById("weekly-btn");
const monthly = document.getElementById("monthly-btn");

console.log(daily);
console.log(weekly);
console.log(monthly);

const dayarr = document.querySelectorAll(".daily");
const weekarr = document.querySelectorAll(".weekly");
const montarr = document.querySelectorAll(".monthly");




daily.addEventListener("click", () => {
    dayarr.forEach((arr) => {
            arr.classList.Add("active");
        });


    weekarr.forEach((arr) => {
        arr.classList.remove("active");

    });

    montarr.forEach((array) => {
        array.classList.remove("active");

    });

});

weekly.addEventListener("click", () => {
    weekarr.forEach((array) => {
        array.classList.add("active");

    });


    dayarr.forEach((array) => {
        array.classList.remove("active");

    });

    montarr.forEach((array) => {
        array.classList.remove("active");

    });

});

monthly.addEventListener("click", () => {
    montarr.forEach((array) => {
        array.classList.add("active");
    });


    weekarr.forEach((array) => {
        array.classList.remove("active");

    });

    dayarr.forEach((array) => {
        array.classList.remove("active");

    });

});





