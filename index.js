function calculate() {

  let totalPoints = 0;
  //servers
  let form1 = document.getElementById("servers").elements;

  for (let i = 0; i < form1.length; i++) {
    let value = convert(form1[i].value);
    let shours = value * 2;
    form1[i].value = (shours).toFixed(2);
    totalPoints += shours;
  }
  let form2 = document.getElementById("bussers").elements;

  for (let i = 0; i < form2.length; i++) {
    let value2 = convert(form2[i].value);
    let bhours = value2 * 1;
    form2[i].value = (bhours).toFixed(2);
    totalPoints += bhours;
  }
  let form3 = document.getElementById("expo").elements;

  for (let i = 0; i < form3.length; i++) {
    let value3 = convert(form3[i].value);
    let ehours = value3 * 1.25;
    form3[i].value = (ehours).toFixed(2);
    totalPoints += ehours;
  }
  let form4 = document.getElementById("hosts").elements;

  for (let i = 0; i < form4.length; i++) {
    let value4 = convert(form4[i].value);
    let hhours = value4 / 2;
    form4[i].value = (hhours).toFixed(2);
    totalPoints += hhours;
  }

  let tipForm = document.getElementById("tips").elements;
  let totalTips = 0;

  for (let i = 0; i < tipForm.length; i++) {
    let tips = tipForm[i].value * 1;
    totalTips += tips;
  }

  let tipDisplay = document.getElementById("totaltips").innerHTML = totalTips;
  let kitchenTips = Math.floor(totalTips / 10);
  let fohTips = totalTips - kitchenTips;
  let pointsPerDollar = Math.floor((fohTips / totalPoints) * 100) / 100;

  document.getElementById("kitchentips").innerHTML = kitchenTips;
  document.getElementById("fohtips").innerHTML = fohTips;
  document.getElementById("totalpoints").innerHTML = totalPoints.toFixed(2);
  document.getElementById("pointsperdollar").innerHTML = pointsPerDollar;

  //final tip calcutation
  //servers

  for (let i = 0; i < form1.length; i++) {
    // let value = convert(form1[i].value)
    let stips = (form1[i].value * pointsPerDollar).toFixed(2);
    form1[i].insertAdjacentHTML("afterend", "$" + stips);

  }
  for (let i = 0; i < form2.length; i++) {
    let btips = (form2[i].value * pointsPerDollar).toFixed(2);
    form2[i].insertAdjacentHTML("afterend", "$" + btips);
  }
  for (let i = 0; i < form3.length; i++) {
    let etips = (form3[i].value * pointsPerDollar).toFixed(2);
    form3[i].insertAdjacentHTML("afterend", "$" + etips);

  }
  for (let i = 0; i < form4.length; i++) {
    let htips = (form4[i].value * pointsPerDollar).toFixed(2);
    form4[i].insertAdjacentHTML("afterend", "$" + htips);
  }
}

function convert(time) {
  if(!time) return 0;
  let hoursMinutes = time.split(/[.:]/);
  let hours = parseInt(hoursMinutes[0], 10);
  let minutes = hoursMinutes[1] ? parseFloat(hoursMinutes[1], 10) : 0;
  return (hours + (minutes / 60));
}
