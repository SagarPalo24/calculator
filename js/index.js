let inputbox2=document.getElementsByClassName('inputbox2')[0]
let inputbox1=document.getElementsByClassName('inputbox1')[0]
let equation;
function getval(num){

if(inputbox2.value=='0'){
    inputbox2.value=num
}
else{
    inputbox2.value+=num
}
}
function getans(){
    let ans=eval(inputbox2.value)
    let equation=inputbox2.value
    inputbox2.value=ans
    inputbox1.value=equation +'='
}
function getzero(){
    inputbox2.value=0
    inputbox1.value=''

}