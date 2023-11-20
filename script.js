function convert(){
const inp=Number(document.getElementById("input").value)
console.log(inp);
const res=inp/2.54;
const output=document.getElementById("result")
output.innerHTML=res.toFixed(2)+" Inches"
}
function Enter(k){
    if(k && k.keycode == 13){
        document.forms[0].submit();
        console.log("enter pressed");
    }
    
}
function checkSubmit(e) {
    if(e && e.keyCode == 13) {
       document.forms[0].submit();
    }
 }
 