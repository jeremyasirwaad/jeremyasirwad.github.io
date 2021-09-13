var clock = document.getElementById('clock');
var heartdiv = document.getElementById('heartratediv')
var watchimg = document.getElementById('watchimg')
var timebtn = document.getElementById('timebtn')
var heartbtn = document.getElementById('heartbtn')
var blackbtn = document.getElementById('blackbtn');
var redbtn = document.getElementById('redbtn');
var purplebtn = document.getElementById('purplebtn');
var brownbtn = document.getElementById('brownbtn');



function showtime()
{
    var date = new Date();
    clock.innerText = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}

blackbtn.addEventListener('click',function()
{
    watchimg.src = './watchpics/iOeUBV7.png'
})

redbtn.addEventListener('click',function()
{
    watchimg.src = './watchpics/PTgQlim.png'
})

purplebtn.addEventListener('click',function()
{
    watchimg.src = './watchpics/Mplj1YR.png'
})

brownbtn.addEventListener('click',function()
{
    watchimg.src = './watchpics/xSIK4M8.png'
})

timebtn.addEventListener('click',function()
{
    heartdiv.style.display = ''
})


setInterval(showtime,1000);

