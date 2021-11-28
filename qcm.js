document.querySelector('.cl')

function check() {
	var c=0;
	var q1=document.quiz.question1.value;
	var q2=document.quiz.question2.value;
	var q3=document.quiz.question3.value;
	var q4=document.quiz.question4.value;
	var q5=document.quiz.question5.value;
	var q6=document.quiz.question6.value;
	var q7=document.quiz.question7.value;
	var q8=document.quiz.question8.value;
	var q9=document.quiz.question9.value;
	var q10=document.quiz.question10.value;
	var hh="/10";

	if (q1=="Lyon") {c++}
	if (q2=="Messi") {c++}
	if (q3=="30") {c++}
	if (q4=="6") {c++}
	if (q5=="2") {c++}
	if (q6=="Maradona") {c++}
	if (q7=="5") {c++}
	if (q8=="2") {c++}
	if (q9=="Marseille") {c++}
	if (q10=="12") {c++}
       document.write("Votre score est de &nbsp" +c +hh);

var verif1="<br><b>Question 1:&nbsp <b>Bonne Réponse</b>"
var verif2="<br><b>Question 2:&nbsp <b>Bonne Réponse</b>"
var verif3="<br><b>Question 3:&nbsp <b>Bonne Réponse</b>"
var verif4="<br><b>Question 4:&nbsp <b>Bonne Réponse</b>"
var verif5="<br><b>Question 5:&nbsp <b>Bonne Réponse</b>"
var verif6="<br><b>Question 6:&nbsp <b>Bonne Réponse</b>"
var verif7="<br><b>Question 7:&nbsp <b>Bonne Réponse</b>"
var verif8="<br><b>Question 8:&nbsp <b>Bonne Réponse</b>"
var verif9="<br><b>Question 9:&nbsp  <b>Bonne Réponse</b>"
var verif10="<br><b>Question 10:&nbsp <b>Bonne Réponse</b>"

var fau1="<br><b>Question1:&nbsp<b> <b>Dommage La réponse est 'Lyon'</b>"
var fau2="<br><b>Question 2:&nbsp   <b>Dommage La réponse est 'Messi'</b>"
var fau3="<br><b>Question 3:&nbsp   <b>Dommage la réponse '30'</b>"
var fau4="<br><b>Question 4:&nbsp   <b>Dommage La réponse est '6'</b>"
var fau5="<br><b>Question 5:&nbsp   <b>Dommage la réponse est '2'</b>"
var fau6="<br><b>Question 6:&nbsp   <b>Dommage La réponse est 'Maradona'</b>"
var fau7="<br><b>Question 7:&nbsp   <b>Dommage la réponse est '5'</b>"
var fau8="<br><b>Question 8:&nbsp   <b>Dommage la réponse est '2'</b>"
var fau9="<br><b>Question 9:&nbsp   <b>Dommage la réponse est 'Marseille'</b>"
var fau10="<br><b>Question 10:&nbsp <b>Dommage la réponse est '12'</b>"




 if(q1=="Lyon"){
 	document.write(verif1.fontcolor("green"));

 }else{
     document.write(fau1.fontcolor("red"));

 }

if(q2=="Messi"){
 	document.write(verif2.fontcolor("green"));
 }else{
 	  document.write(fau2.fontcolor("red"));
 }

if(q3=="30"){
 	document.write(verif3.fontcolor("green"));
 }else{
 	  document.write(fau3.fontcolor("red"));
 }

if(q4=="6"){
 	document.write(verif4.fontcolor("green"));
 }else{
 	  document.write(fau4.fontcolor("red"));
 }

if(q5=="2"){
 	document.write(verif5.fontcolor("green"));
 }else{
 	  document.write(fau5.fontcolor("red"));
 }

if(q6=="Maradona"){
 	document.write(verif6.fontcolor("green"));
 }else{
 	  document.write(fau6.fontcolor("red"));
 }

if(q7=="5"){
 	document.write(verif7.fontcolor("green"));
 }else{
 	  document.write(fau7.fontcolor("red"));
 }

if(q8=="2"){
 	document.write(verif8.fontcolor("green"));
 }else{
 	  document.write(fau8.fontcolor("red"));
 }

if(q9=="Marseille"){
 	document.write(verif9.fontcolor("green"));
 }else{
 	  document.write(fau9.fontcolor("red"));
 }

if(q10=="12"){
 	document.write(verif10.fontcolor("green"));
 }else{
 	document.write(fau10.fontcolor("red"));
 }





 }

