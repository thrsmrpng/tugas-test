var panggiluntukinput = require ("readline-sync");
var bilangan = panggiluntukinput.question ("masukan bilangan: ");
var sisa_bagi = bilangan % 2
if (isNaN(bilangan))
console.log("yang anda masukan bukan angka");
else if (sisa_bagi %2) {
    console.log("bilangan ganjil")
}else{
    console.log('bilangann genap')
}


