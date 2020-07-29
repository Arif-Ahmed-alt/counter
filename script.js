var btnIn=document.querySelector(".incraese");
var btnDec=document.querySelector(".decrease");
var btnRes=document.querySelector(".reset");
var digit=document.querySelector(".digit");

var count=0;

btnIn.addEventListener("click",function(){
    count++;
    digit.innerHTML=count;
});
btnDec.addEventListener("click",function(){
    count--;
    digit.innerHTML=count;
});
btnRes.addEventListener("click",function(){
    count=0;
    digit.innerHTML="0";
})