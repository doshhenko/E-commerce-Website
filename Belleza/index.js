
function saleCountDown() {
    const saleDate = new Date ("October 16, 2026 00:00");
    const now = new Date();
    const diff = saleDate - now;
    
    const msInSecond = 1000;             // милисек в сек - 1000
    const msInMinute = 60 * 1000;         // милисек в мин - 60 000
    const msInHour = 60 * 60 * 1000;     // милисек в часе - 3 600 000
    const msInDay = 24 * 60 * 1000 * 60;  // милисек в сутках - 86 400 000
    
    const displayDay = Math.floor(diff/msInDay);
    document.querySelector(".days").textContent = displayDay;
    
    const displayHour = Math.floor((diff%msInDay) / msInHour);
    document.querySelector(".hours").textContent = displayHour;
    
    const displayMinute = Math.floor((diff%msInHour) / msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;
    
    const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
    document.querySelector(".seconds").textContent = displaySecond;

    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerID);
        theEndofSale();
    }

}
let timerID = setInterval(saleCountDown, 10);

function theEndofSale() {
    const saleEnd = document.querySelector(".saleEnd");
    const newPrice = document.querySelector("ins");
    const oldPrice = document.querySelector("del");
    oldPrice.classList.add("oldprice");
    newPrice.style.display = "none";
    const parent = saleEnd.parentNode;
    parent.removeChild(saleEnd);
}


saleCountDown();