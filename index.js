
//Calculate point for each person in each work group
//Display these numbers in each input onchange
//Multiply points by points per dollar for each individual.


function calculate() {

let totalPoints = 0;


//servers

let s1 = document.getElementById("s1").value * 2;
totalPoints += s1;
let s2 = document.getElementById("s2").value * 2;
totalPoints += s2;
let s3 = document.getElementById("s3").value * 2;
totalPoints += s3;
let s4 = document.getElementById("s4").value * 2;
totalPoints += s4;
let s5 = document.getElementById("s5").value * 2;
totalPoints += s5;
let s6 = document.getElementById("s6").value * 2;
totalPoints += s6;
let s7 = document.getElementById("s7").value * 2;
totalPoints += s7;
let s8 = document.getElementById("s8").value * 2;
totalPoints += s8;
let s9 = document.getElementById("s9").value * 2;
totalPoints += s9;
let s10 = document.getElementById("s10").value * 2;
totalPoints += s10;

//bussers
let b1 = document.getElementById("b1").value * 1;
totalPoints += b1;
let b2 = document.getElementById("b2").value * 1;
totalPoints += b2;
let b3 = document.getElementById("b3").value * 1;
totalPoints += b3;
let b4 = document.getElementById("b4").value * 1;
totalPoints += b4;
let b5 = document.getElementById("b5").value * 1;
totalPoints += b5;
let b6 = document.getElementById("b6").value * 1;
totalPoints += b6;


//expo
let e1 = document.getElementById("e1").value * 1.25;
totalPoints += e1;

//host
let h1 = document.getElementById("h1").value / 2;
totalPoints += h1;
let h2 = document.getElementById("h2").value / 2;
totalPoints += h2;

let totalTips = document.getElementById("totaltips").value;
let kitchenTips = Math.floor(totalTips / 10)
let fohTips = totalTips - kitchenTips;
let pointsPerDollar = (fohTips / totalPoints).toFixed(2);

document.getElementById("kitchentips").innerHTML = kitchenTips;
document.getElementById("fohtips").innerHTML = fohTips;
document.getElementById("totalpoints").innerHTML = totalPoints.toFixed(2);
document.getElementById("pointsperdollar").innerHTML = pointsPerDollar;

//final tip calcutation
//servers
document.getElementById("sv1").innerHTML = "SERVER 1: $" + (s1 * pointsPerDollar).toFixed(2);
document.getElementById("sv2").innerHTML = "SERVER 2: $" + (s2 * pointsPerDollar).toFixed(2);
document.getElementById("sv3").innerHTML = "SERVER 3: $" + (s3 * pointsPerDollar).toFixed(2);
document.getElementById("sv4").innerHTML = "SERVER 4: $" + (s4 * pointsPerDollar).toFixed(2);
document.getElementById("sv5").innerHTML = "SERVER 5: $" + (s5 * pointsPerDollar).toFixed(2);
document.getElementById("sv6").innerHTML = "SERVER 6: $" + (s6 * pointsPerDollar).toFixed(2);
document.getElementById("sv7").innerHTML = "SERVER 7: $" + (s7 * pointsPerDollar).toFixed(2);
document.getElementById("sv8").innerHTML = "SERVER 8: $" + (s8 * pointsPerDollar).toFixed(2);
document.getElementById("sv9").innerHTML = "SERVER 9: $" + (s9 * pointsPerDollar).toFixed(2);
document.getElementById("sv10").innerHTML = "SERVER 10: $" + (s10 * pointsPerDollar).toFixed(2);
//bussers
document.getElementById("bs1").innerHTML = "BUSSER 1: $" + (b1 * pointsPerDollar).toFixed(2);
document.getElementById("bs2").innerHTML = "BUSSER 2: $" + (b2 * pointsPerDollar).toFixed(2);
document.getElementById("bs3").innerHTML = "BUSSER 3: $" + (b3 * pointsPerDollar).toFixed(2);
document.getElementById("bs4").innerHTML = "BUSSER 4: $" + (b4 * pointsPerDollar).toFixed(2);
document.getElementById("bs5").innerHTML = "BUSSER 5: $" + (b5 * pointsPerDollar).toFixed(2);
document.getElementById("bs6").innerHTML = "BUSSER 6: $" + (b6 * pointsPerDollar).toFixed(2);
//expo
document.getElementById("ex1").innerHTML = "EXPO: $" + (e1 * pointsPerDollar).toFixed(2);
//hosts
document.getElementById("ht1").innerHTML = "HOST 1: $" + (h1 * pointsPerDollar).toFixed(2);
document.getElementById("ht2").innerHTML = "HOST 2: $" + (h2 * pointsPerDollar).toFixed(2);
}
