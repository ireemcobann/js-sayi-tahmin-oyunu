// Kullanıcıya 1-20 arası bir sayı tahmin etmesini isteyelim.
// Cevap hakkı 5 olacak.
// Her bir yanlış cevapta cevap hakkından -1 azalacak.
// Eğer tahmin ettiği sayı random üretilen sayıdan büyükse "Daha küçük bir sayı deneyin." , tahmin ettiği sayı random üretilen sayıdan küçükse "Daha büyük bir sayı deneyin." diye console'da mesaj çıkartalım.
// Doğru bildiğinde console'da tebrikler yazdıralım.


let rastgeleSayi = Math.floor(Math.random() * 20) + 1;
let cevapHakki = 5;
alert("1 ile 20 arasında bir sayı tahmin edin.");

for( let i = 0; i < 5; i++) {

    let kullaniciTahmini = prompt((i + 1) + ". tahmininizi girin: (Kalan hak: " + (cevapHakki - i) + ")");
    kullaniciTahmini = parseInt(kullaniciTahmini);

    if (kullaniciTahmini === rastgeleSayi) {
        console.log("Tebrikler! Doğru tahmin ettiniz: " + rastgeleSayi);
        break;
    } else if (kullaniciTahmini > rastgeleSayi) {
        console.log("Daha küçük bir sayı deneyin.");
    } else {
        console.log("Daha büyük bir sayı deneyin.");
    }if (i === cevapHakki - 1) {
        console.log("Maalesef, tahmin hakkınız bitti. Doğru sayı: " + rastgeleSayi);
    }
}



