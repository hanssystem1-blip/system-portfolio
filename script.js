// $(document).ready(function () {
//     $('.dark').click(function () {
//         $('footer').toggleClass('fond');
//         $('body,nav').toggleClass('active');
//         $('ion-icon').toggleClass('change');
//         $('header,section,p').toggleClass('blanc');
//     });
// });
// $(document).ready(function () {
//     $('.burger').click(function () {
//         $('ul,button').toggleClass('present');
//     })
// })
 fond =document.getElementById("change");
 navi =document.querySelector("nav");
//  burger = document.querySelector("ul");
 all=document.querySelector("*");
rot =document.getElementById("change");
fond.addEventListener("click",()=>{
    navi.classList.toggle("active");
    rot.classList.toggle("rotate");
    document.querySelector("footer").classList.toggle("foot");
    document.querySelector(" em ").classList.toggle("blanc");
    document.querySelector(" a ").classList.toggle("blanc");
    all.classList.toggle("active");
    
});
aff=document.querySelector("ul");
menu=document.getElementById("burger");
menu.addEventListener("click",()=>{
    aff.classList.toggle("present");
    document.querySelector("nav .option").classList.toggle("present");
})
