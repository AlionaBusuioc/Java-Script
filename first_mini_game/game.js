function makeChair(n){
  return `<td onclick="book(${n});">
  <img src="images/chair.png">
    <h3>${n}</h3>
  </td>`;
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
  confirm(`Book this seat ${n}?`);
//  alert();
}
document.getElementById('row').innerHTML = makeRow(9);
//document.write('<table><tr>'+makeRow(3)+'</tr></table>')
//makeRow(3);
