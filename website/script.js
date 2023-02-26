let eq=""
function readchar(char){
    eq+=char
    document.getElementById("display").value=eq
}
function sum(){
    let a=eval(eq)
    document.getElementById("display").value=a
}
function clearScreen(){
    eq=""
    document.getElementById("display").value=eq
}