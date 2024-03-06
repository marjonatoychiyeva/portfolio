let body = document.querySelector("body");
let sun_btn = document.querySelector('.sun_btn');
let moon_btn = document.querySelector('.moon_btn');


// body.addEventListener('click', function(){
//     body.classList.toggle('dark')
// })


sun_btn.addEventListener("click",function(){
    body.classList.toggle('dark');
})

moon_btn.addEventListener("click", function(){
    body.classList.toggle('dark');
})