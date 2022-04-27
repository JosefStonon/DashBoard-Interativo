const dailybtn = document.getElementById("daily-btn");
const weeklybtn = document.getElementById("weekly-btn");
const monthlybtn = document.getElementById("monthly-btn");

const arrdaily = document.querySelectorAll(".daily");
const arrweekly = document.querySelectorAll(".weekly");
const arrmonthly = document.querySelectorAll(".monthly");




dailybtn.addEventListener("click", () => {
    arrdaily.forEach((arr) => {
        arr.classList.add("active")
    })

    arrweekly.forEach((arr) => {
        arr.classList.remove("active")
    });

    arrmonthly.forEach((arr) => {
        arr.classList.remove("active")
    });

});



weeklybtn.addEventListener("click", () => {
    arrweekly.forEach((arr) => {
        arr.classList.add("active")
    });

    arrdaily.forEach((arr) => {
        arr.classList.remove("active")
    });

    arrmonthly.forEach((arr) => {
        arr.classList.remove("active")
    });
});

monthlybtn.addEventListener("click", () => {
    arrmonthly.forEach((arr) => {
        arr.classList.add("active")
    });

    arrweekly.forEach((arr) => {
        arr.classList.remove("active")
    });

    arrdaily.forEach((arr) => {
        arr.classList.remove("active")
    });




});





