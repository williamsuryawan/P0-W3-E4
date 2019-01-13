var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */

dataHandling2(input);

function dataHandling2(input){
input.splice(1,2,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
input.splice(4,1,"Pria", "SMA International Metro");
console.log(input);

var tanggal=input[3];
var pisahtanggal=tanggal.split("/");
console.log(pisahtanggal);

var namaBulan ="";
switch(pisahtanggal[1]) {
  case "01" : {namaBulan="Januari"; break;}
  case "02" : {namaBulan="Februari"; break;}
  case "03" : {namaBulan="Maret"; break;}
  case "04" : {namaBulan="April"; break;}
  case "05" : {namaBulan="Mei"; break;}
  case "06" : {namaBulan="Juni"; break;}
  case "07" : {namaBulan="Juli"; break;}
  case "08" : {namaBulan="Agustus"; break;}
  case "09" : {namaBulan="September"; break;}
  case "10" : {namaBulan="Oktober"; break;}
  case "11" : {namaBulan="November"; break;}
  case "12" : {namaBulan="Desember"; break;}
}
console.log(namaBulan);

var edittanggal=pisahtanggal.join("-");
console.log(edittanggal);

var maksnama = input[1].toString().slice(0,15);
console.log(maksnama);

return ;
}
