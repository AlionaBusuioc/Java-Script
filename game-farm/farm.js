// Garden - 10 uciastkov
var garden = [
  'pumpkin', //0
  '', //1
  'corn', //2
  'corn', //3
  'pumpkin', //4
  '', //5
  '', //6
  '', //7
  '', //8
  '' //9
];
// function arata numai 1 variabila
function showParcel(i){
var div = document.getElementById('garden');
if(garden[i] == 'pepper'){
    div.innerHTML += "<div onclick='sell(???)'><img src='images/pepper.png'/></div>";
  }
  if(garden[i] == 'corn'){
      div.innerHTML += "<div><img src='images/corn.png'/></div>";
    }
    if(garden[i] == ''){
        div.innerHTML += "<div></div>";
      }
    if(garden[i] == 'pumpkin'){
        div.innerHTML += "<div><img src='images/pumpkin.png'/></div>";
      }
      if(garden[i] == 'pepper2'){
          div.innerHTML += "<div><img src='images/pepper2.png'/></div>";
        }
}
function sell(vegetable){
  ->> price
}
 ///////////////////////////////////////////////////
 for(var i=0; i<10; i++){
 showParcel(i);
 }
