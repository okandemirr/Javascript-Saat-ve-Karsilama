/* Prompt ile kullanıcıdan isim alma  */

let ad = prompt("Lütfen adınızı giriniz");
let myName = document.querySelector("#myName");
myName.innerHTML = `${ad}`;

/* Ekrana Anlık Saat ve Gün Yazdırma */

window.onload = saatBaslat;
function saatBaslat() {
  let tarih = new Date();
  let saat = tarih.getHours();
  let dakika = tarih.getMinutes();
  let saniye = tarih.getSeconds();
  let gunler = ["pazar","pazartesi","salı","çarşamba","perşembe","cuma","cumartesi"]
  let today = gunler[tarih.getDay()]

  let saatBilgisi = document.querySelector("#myClock");
  saatBilgisi.innerHTML = `${saat} : ${dakika} : ${saniye}  ${today.toLocaleUpperCase()} `;
  nowTime = setTimeout("saatBaslat()", 1000);
}

function time(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
