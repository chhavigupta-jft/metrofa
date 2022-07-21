let arr=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let s=document.getElementById('source');
//console.log(s);
let d=document.getElementById('dest');
let method=document.getElementById('method')
let calculate=document.getElementById('btn1');
let reset=document.getElementById('btn2');
let displayFair=document.getElementById('input-field');
let sourceData='';
let destinData='';
function Load(){
    for(let i=0;i<arr.length;i++){
      sourceData=sourceData+`<option value="${i+1}">${arr[i]}</option>`;
      destinData=destinData+`<option value="${i+1}">${arr[i]}</option>`;
    }
    s.innerHTML=sourceData;
    d.innerHTML=destinData;
}

(function init(){ 
    Load();
})();

function calculateAmount(){
let source=s.options[s.selectedIndex].value
let destin=d.options[d.selectedIndex].value
let cardPay=false;
if(method.options[method.selectedIndex].value=='Card'){
cardpay=true;
//console.log('I am inside it');
}
let totalStationCoverd=destin-source;
let fair=0;

if(0<=totalStationCoverd && totalStationCoverd<=4){
    fair=10;
}
else if(5<=totalStationCoverd && totalStationCoverd<=8){
   fair=20;
}
else if(4<=totalStationCoverd && totalStationCoverd<=12){
  fair=30;
}
else if(13<=totalStationCoverd && totalStationCoverd<=16){
   fair=40;
}
else if(17<=totalStationCoverd  && totalStationCoverd <=20){
   fair=50;
}
else if(21<=totalStationCoverd && totalStationCoverd<=24){
   fair=60;
}
else{
   fair=70;
}

if(cardPay){
    fair=fair*0.9;
}
console.log(fair,totalStationCoverd);
return fair;
}


calculate.addEventListener('click',function(){
    //console.log('function is called');
    fair=calculateAmount();
    //console.log(fair);
    displayFair.value=fair;
    
});