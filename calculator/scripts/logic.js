
function display(val){
document.getElementById("result").value+=val;
}
function clears(){
    document.getElementById("result").value="";

}

function solve(){
  var temp = document.getElementById("result").value;
  if(temp.charAt(0)=='√'){
    console.log(temp.substring(1));
    var elem= temp.substring(1);
    root1(elem);
    return;
  }
   else if(temp.includes("sin")){
    console.log(temp.substring(3));
    var num=temp.substring(3);
    sin1(num);
    return;
  }else if(temp.includes("cos")){
    var num =temp.substring(3);
    cos1(num);
  }else if(temp.includes("tan")){
    var num= temp.substring(3);
    tan1(num);

  }else if(temp.includes("log")){
    var num=temp.substring(3);
    log1(num);
  }else if(temp.includes("ln")){
    var num=temp.substring(2);
    ln1(num);
  
  }else if(temp.includes("!")){
    var len= temp.length;
    var n= temp.substring(0,len-1);
    console.log(n);
  document.getElementById('result').value =factorial(n);
 

  }else if(temp.includes('^')){
    var a= (document.getElementById('result').value).slice(0,(document.getElementById('result').value).indexOf('^'));
    var b=(document.getElementById('result').value).slice((document.getElementById('result').value).indexOf('^')+1);
    (document.getElementById('result').value)=eval("Math.pow("+a+","+b+")");
  }
  // }else if(temp.includes("EXP")){
  //   exp1();
  // }
  else{
  var a= eval(temp);
    console.log(a);
    var m = a.toString();
    document.getElementById("result").value =m;     
}
}


function root1(elem){
  let a = Math.sqrt(elem);
  document.getElementById('result').value = a.toString();
}
function sin1(num){
  let b=Math.sin(num);
  document.getElementById('result').value = b.toString();

}
function cos1(num){
  let b= Math.cos(num);
  document.getElementById('result').value=b.toString();
}
function tan1(num){
  let b= Math.tan(num);
  document.getElementById('result').value=b.toString();
}
function log1(num){
  let b= Math.log10(num);
  document.getElementById('result').value=b.toString();
}
function ln1(num){
  let b= Math.log(num);
  document.getElementById('result').value=b.toString();
}
 
// function exp1(){
//   if(document.getElementById('num')){
//     document.getElementById('result').value=Math.exp(document.getElementById('result'));
//   }
function factorial(n){
  if(n==0||n==1){
return 1;

  }else{
 return n*factorial(n-1);
  
}
}
