const dislay=document.getElementById("display");
const expressionDisplay=document.getElementById("expression");

let currExp ="";
let lastInputisOperator=false;

document.addEventListener("keydown",(event)=>{
    const key=event.key;
if(!isNaN (key) || key==="." ){
    appendnumber(key);
}else if(['+',"-","*","/","%"].includes(key)){
    appendOperator(key);
}else if(key === "="){
    calculate();
}else if(key ==="Backspace"|| key ==="DEL"){
    deletelast();
}else if(key === "Escape"){
    clearDisplay();
}
}) ;
function appendnumber(key){
    // if last input was operator, clear the main display
    if(lastInputisOperator){
        display.innerHTML="";
        lastInputisOperator=false;
    }
    currExp += key;
    display.innerHTML +=key;
}
function appendOperator(key){
    if(display.innerHTML==='' || currExp==='') return;
    expressionDisplay.innerHTML += currExp + ' ' +`${key}`;
    currExp+=key;
    display.innerHTML="";
}
function deletelast(){
    n=currExp.length;
    currExp=currExp.substring(0,n-1)
    display.innerHTML=display.innerHTML.slice(0,-1);
}
function clearDisplay(){
    display.innerHTML='';
    currExp='';
    expressionDisplay.innerHTML="";
    lastInputisOperator=false;
}
function calculate(){
    if(display.innerHTML ===''|| currExp==='') return;
    expressionDisplay.innerHTML=currExp+' '+'=';
    let result =eval(currExp);
    display.innerHTML=result;
    currExp=result;
    lastInputisOperator=true;
}