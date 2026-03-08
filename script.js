fond = document.getElementById("change");
navi = document.querySelector("nav");
all = document.querySelector("*");
rot = document.getElementById("change");
fond.addEventListener("click", () => {
    navi.classList.toggle("active");
    rot.classList.toggle("rotate");
    document.querySelector("footer").classList.toggle("foot");
    document.querySelector(" em ").classList.toggle("blanc");
    document.querySelector(" a ").classList.toggle("blanc");
    all.classList.toggle("active");
    document.querySelector(".container div").classList.toggle("projet");
});
aff = document.querySelector("ul");
menu = document.getElementById("burger");
menu.addEventListener("click", () => {
    aff.classList.toggle("present");
    document.querySelector("nav .option").classList.toggle("present");
})
