function makeChair(n){
  return `<div class="chair" onclick="book(${n});">
    <h3>${n}</h3>
  </div>`;
}
function makeRow(count){
  var row ="";
  for(var i=1;i<=count; i++){
  //  console.log(makeChair(i));
  row+= makeChair(i);
  }
  //alert(row);
  return row;
}

function book(n){
  var schedule = ["11-00","16-00","20-00"];
  var c = confirm(`Do you want to book ${n} seat?`);
  var time = +prompt(`What time do you choose?\n1-11.00 \n2-16.00 \n3-20.00`);
  var priceC = (price, time);
  alert(`You choose ${n} seat, at ${schedule[(time-1)]}, you should pay ${priceC} bucks`);
  //confirm(`Book this seat ${n}?`);
//  alert();
}
function price (seat, time){
  var low = [1, 2, 3, 6, 7, 8, 9];
  var vip =[4, 5];
  var coeficient;
  var cost;
  (time == 1 || time == 2) ? coeficient = 1 : coeficient = 1.2;
  if (low.includes(seat)) cost = 50;
  else if (vip.includes(seat)) cost = 100;
  else alert ("You choose wrong seat");
  return coeficient * cost;
}

document.getElementById('row').innerHTML = makeRow(9);
//document.write('<table><tr>'+makeRow(3)+'</tr></table>')
//makeRow(3);
