let c = 0;

function callback() {
    console.log(c)
    document.querySelectorAll("h4")[1].innerHTML = c;
    c=c+1;
}
setInterval(callback, 1000); 