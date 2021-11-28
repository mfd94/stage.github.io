 function calculate(){

//colonne
var a=parseInt(document.getElementById("one").value);
var b=parseInt(document.getElementById("two").value);
var c=parseInt(document.getElementById("three").value);
//colonne 1
var d=parseInt(document.getElementById("one1").value);
var e=parseInt(document.getElementById("two1").value);
var f=parseInt(document.getElementById("three1").value);
//colonne 2
var g=parseInt(document.getElementById("one2").value);
var h=parseInt(document.getElementById("two2").value);
var i=parseInt(document.getElementById("three2").value);
//colonne 3
var j=parseInt(document.getElementById("one3").value);
var k=parseInt(document.getElementById("two3").value);
var l=parseInt(document.getElementById("three3").value);
//colonne 4
var m=parseInt(document.getElementById("one4").value);
var n=parseInt(document.getElementById("two4").value);
var o=parseInt(document.getElementById("three4").value);
//colonne 5
var p=parseInt(document.getElementById("one5").value);
var q=parseInt(document.getElementById("two5").value);
var r=parseInt(document.getElementById("three5").value);

//colone 6
var s=parseInt(document.getElementById("one6").value);
var t=parseInt(document.getElementById("two6").value);
var u=parseInt(document.getElementById("three6").value);
//colonne 7
var v=parseInt(document.getElementById("one7").value);
var w=parseInt(document.getElementById("two7").value);
var x=parseInt(document.getElementById("three7").value);
//colonne 8
var y=parseInt(document.getElementById("one8").value);
var z=parseInt(document.getElementById("two8").value);
var a1=parseInt(document.getElementById("three8").value);

//colonne 9
var a2=parseInt(document.getElementById("one9").value);
var a3=parseInt(document.getElementById("two9").value);
var a4=parseInt(document.getElementById("three9").value);

const prix= b+e+h+k+n+q+t+w+z+a3

const quant= c+f+i+l+o+r+u+x+a1+a4

//Calcule Col
document.getElementById("total").value=(b*c);
//Calcule Col1
document.getElementById("total1").value=(e*f);
//Calcule Col2
document.getElementById("total2").value=(h*i);
//Calcule Col3
document.getElementById("total3").value=(k*l);
//Calcule Col4
document.getElementById("total4").value=(n*o);
//Calcule Col5
document.getElementById("total5").value=(q*r);
//Calcule Col6
document.getElementById("total6").value=(t*u);
//Calcule Col7
document.getElementById("total7").value=(w*x);
//Calcule Col8
document.getElementById("total8").value=(z*a1);
//Calcule Col9
document.getElementById("total9").value=(a3*a4);
//Calcul
const somme=(prix*quant);
//Calcule Total
const soustotal=parseInt(document.getElementById("sous").value=(+somme));

const remise = parseInt(document.getElementById("remise").value);

const sousmr= parseInt(document.getElementById("sousmr").value=(soustotal-(remise/100)));

const impot=parseInt(document.getElementById("impot").value);

const taxe=parseInt(document.getElementById("taxetotal").value=Math.round(soustotal*(impot/100)));

const solde=parseInt(document.getElementById("solde1").value=sousmr+taxe);


}


function access() {
    var username = prompt("Identifiant", "");
    var password = prompt("Mot de passe", "");

    if (username === "Admin_GSB" && password === "admin") {
        document.location.href="pdf.html";
    } else {
        alert("Mauvais identifiant. Veuillez réessayer.")
    }
}