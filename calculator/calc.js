


document.addEventListener('keydown',function(event){
     let btns=document.querySelectorAll('.btn');
    for(var i=0;i<btns.length;i++){
        if(event.key==="="||event.key==="Enter"){
            compute();
            animate('=');
        }
      else if(event.key===btns[i].innerHTML&&event.key!=="="){
        myFun(event.key);
        animate(event.key);
       }
       else if(event.key==="Backspace"){
        del();
        animate('DE');
       }
       
    }
    
});



function myFun(symbol){
document.getElementById('output-field').value+=symbol;
}

function reset(){
document.getElementById('output-field').value='';
}

function del(){
var val=document.getElementById('output-field').value;
var len=val.length-1;
var sliced=val.slice(0,len);
document.getElementById('output-field').value=sliced;
}

function compute(){
var val=document.getElementById('output-field').value;
var addSearch=0;
   if(val.indexOf('+')!==-1){
    addSearch=val.indexOf('+');
    var a=val.slice(0,addSearch);
    var b=val.slice(addSearch+1,val.length);
    document.getElementById('output-field').value=(Number(a)+Number(b));
   }
  else if(val.indexOf('*')!==-1){
    mulSearch=val.indexOf('*');
    var a=val.slice(0,mulSearch);
    var b=val.slice(mulSearch+1,val.length);
    document.getElementById('output-field').value=(Number(a)*Number(b));
   }
  else if(val.indexOf('-')!==-1){
    subSearch=val.indexOf('-');
    var a=val.slice(0,subSearch);
    var b=val.slice(subSearch+1,val.length);
    document.getElementById('output-field').value=(Number(a)-Number(b));
   }
   else if(val.indexOf('/')!==-1){
    divideSearch=val.indexOf('/');
    var a=val.slice(0,divideSearch);
    var b=val.slice(divideSearch+1,val.length);
    document.getElementById('output-field').value=(Number(a)/Number(b));
   }
   else if(val.indexOf('rad')!==-1){
    let num=val.slice(4,val.length-1);
    document.getElementById('output-field').value=Math.sqrt(num);
   }
   else if(val.indexOf('log')!==-1){
    let num=val.slice(4,val.length-1);
    document.getElementById('output-field').value=Math.log10(num);
   }
   else if(val.indexOf('e')!==-1){
    let num=val.slice(2,val.length-1);
    document.getElementById('output-field').value=Math.exp(num);
   }
   else if(val.indexOf('pow')!==-1){
    
     let comma=val.indexOf(',');
     let a=val.slice(4,comma);
     let b=val.slice(comma+1,val.length-1);
    document.getElementById('output-field').value=Math.pow(Number(a),Number(b));
   }
   else{
    document.getElementById('output-field').value=val;
   }
}

 function animate(symbol){
    document.querySelector('.'+symbol).classList.add('pressed');

    setTimeout(function(){
        document.querySelector('.'+symbol).classList.remove('pressed');
    },100);
 }