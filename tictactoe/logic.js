var count=1;



function printXorZero(y){
    if(document.getElementById(y.id).innerText.length==0){
    if(count%2!=0){

        document.getElementById(y.id).innerHTML= 'X';
      }else{
        document.getElementById(y.id).innerHTML= '0';
    }

    count++;
    if(totalconditions()){
        alert('GAME OVER');
        clear();
    }
    
    }
}

function totalconditions(){
    if(check('btn1','btn2','btn3') || check('btn4','btn5','btn6')||check('btn7','btn8','btn9')||
    check('btn1','btn4','btn6') || check('btn2','btn5','btn8')||check('btn3','btn6','btn9')||
    check('btn1','btn5','btn9')|| check('btn3','btn5','btn7')){
        return true;
    }
    
}

function check(one,two,three){
if(document.getElementById(one).innerHTML!="" && document.getElementById(two).innerHTML!="" 
&& document.getElementById(three).innerHTML!="" && 
document.getElementById(one).innerHTML==document.getElementById(two).innerHTML &&
document.getElementById(two).innerHTML==document.getElementById(three).innerHTML
){
    return true;
}}
function clear(){
    var buttons=document.getElementsByTagName('button');
    for(b of buttons){
        b.innerHTML="";
    }
}