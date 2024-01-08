var btc=document.getElementById("bitcoin");
var eth=document.getElementById("ethereum");
var doge=document.getElementById("dogecoin");

var btcR=document.getElementById("bitcoin-inr");
var ethR=document.getElementById("ethereum-inr");
var dogeR=document.getElementById("dogecoin-inr");

var settings={
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cdogecoin%2Cethereum&vs_currencies=usd,inr",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function(response){
    btc.innerHTML=response.bitcoin.usd;
    eth.innerHTML=response.ethereum.usd;
    doge.innerHTML=response.dogecoin.usd;

    btcR.innerHTML=response.bitcoin.inr;
    ethR.innerHTML=response.ethereum.inr;
    dogeR.innerHTML=response.dogecoin.inr;
    
});
/*
Time & Date
setInterval(() => {
    let date=document.getElementById("date");
    let hrs=document.getElementById("hrs");
    let min=document.getElementById("min");
    let sec=document.getElementById("sec");
    
    let currentTime=new Date();
    date.innerHTML=currentTime.getDate();
    hrs.innerHTML=(currentTime.getHours()<10?"0":"")+currentTime.getHours();
    min.innerHTML=(currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
    sec.innerHTML=(currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();
}, 1000);
-/
*/

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();









/*document.addEventListener('DOMContentLoaded', function () {
    const cryptoContainer = document.getElementById('crypto-container');

    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,dogecoin&vs_currencies=usd';

    function fetchCryptoData() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                displayCryptoData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    function displayCryptoData(data) {
        cryptoContainer.innerHTML = '';

        for (const [crypto, priceInfo] of Object.entries(data)) {
            const price = priceInfo.usd.toFixed(2);

            const cryptoCard = document.createElement('div');
            cryptoCard.classList.add('crypto-card');

            cryptoCard.innerHTML = `
                <h2>${crypto.toUpperCase()}</h2>
                <p>Price: $${price}</p>
            `;

            cryptoContainer.appendChild(cryptoCard);
        }
    }

    // Fetch data initially and set up interval for live updates
    fetchCryptoData();
    setInterval(fetchCryptoData, 1000); // Update every 1 minute
});*/
