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
    document.querySelector("footer").classList.toggle("fond");
    document.querySelector("ion-icon").classList.toggle("active");
    all.classList.toggle("active");
    // burger.classList.;
    
});
aff=document.querySelector("ul");
menu=document.getElementById("burger");
menu.addEventListener("click",()=>{
    aff.classList.toggle("present");
    document.querySelector("nav .option").classList.toggle("present");
})
function rotate() {
    // rot = document.getElementById('change')
    // rot.style.transform = 'rotate(180deg)';
    // rot.style.transition = 'transform  1s ease-out';
    // document.getElementById('change').addEventListener(
    //     "click", () => {
    //         n=100;
    //         i=0;
    //         if(i<=n)
    //         {rot.style.transform = 'rotate(360deg)';
    //         rot.style.transition = 'transform  1s ease infinite';}
    //     }
    // );
}
// rot = document.getElementById('change');
// rot.style.color = 'white';

// document.getElementById('change').addEventListener(
//     "click" ,()=>{
//         rot = document.getElementById('change');
//         rot.style.transform = "rotate('360deg')";


//     }
// );