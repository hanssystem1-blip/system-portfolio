$(document).ready(function () {
    $('.dark').click(function () {
        $('footer').toggleClass('fond');
        $('body,nav').toggleClass('active');
        $('ion-icon').toggleClass('change');
        $('header,section,p').toggleClass('blanc');
        // $('article').toggleClass('rot');
    });
});
$(document).ready(function () {
    $('.burger').click(function () {
        $('ul,button').toggleClass('present');
    })
})
function rotate() {
    rot = document.getElementById('change')
    rot.style.transform = 'rotate(180deg)';
    rot.style.transition = 'transform  1s ease-out';
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