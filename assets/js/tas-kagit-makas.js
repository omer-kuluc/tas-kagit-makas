//kullanici secimi
let secim = prompt('Taş-Kağıt-Makas ? ');

//pc secimi
let bilgisayarHamlesi = ['Taş', 'Kağıt','Makas'].at(Math.floor(Math.random() * 3));

console.log('Sizin seçiminiz : ' + secim);
console.log('Bilgisayarın seçimi : ' + bilgisayarHamlesi);

//kosullar
if(secim=='Taş' && bilgisayarHamlesi=='Kağıt') {
  console.log('Sonuç : Kaybettiniz');
} else if (secim =='Taş' && bilgisayarHamlesi=='Makas') {
  console.log('Sonuç : Tebrikler, kazandınız!!!');
} else if (secim=='Kağıt' && bilgisayarHamlesi=='Taş') {
  console.log('Sonuç : Tebrikler, kazandınız!!!');
} else if (secim=='Kağıt' && bilgisayarHamlesi=='Makas') {
  console.log('Sonuç : Kaybettiniz');
} else if (secim=='Makas' && bilgisayarHamlesi=='Taş') {
  console.log('Sonuç : Kaybettiniz');
} else if (secim=='Makas' && bilgisayarHamlesi=='Kağıt') {
  console.log('Sonuç : Tebrikler, kazandınız!!!');
} else {
  console.log('Sonuç : Berabere kaldınız');
}

