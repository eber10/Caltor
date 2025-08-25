let PrimerNumero="";
let SegundoNumero="";
let operador="";
let mostrar=document.getElementById("mostrar");
function actualizarMostrar(){
    mostrar.value=PrimerNumero+(operador|| "")+SegundoNumero;
}
function agregarNumero(num){
    if(operador===""){
        PrimerNumero+=num;
    }else{
        SegundoNumero+=num;
    }
    actualizarMostrar();
}
function agregarPunto(){
    if(operador===""){
        if(!PrimerNumero.includes('.')){
            PrimerNumero+='.';
        }
    }else{
        if(!SegundoNumero.includes('.')){
            SegundoNumero+='.';
        }
    }
    actualizarMostrar();
}
function ponerOperador(op){
    if(PrimerNumero!==""){
        operador=op;
        actualizarMostrar();
    }
}
function calculate(){
    let result;
    let a=parseFloat(PrimerNumero);
    let b=parseFloat(SegundoNumero);
    if(operador==="+"){
        result=a+b;
    }else if(operador==="-"){
        result=a-b;
    }else if(operador==="*"){
        result=a*b;
    }else if(operador=="/"){
        if(b!==0){
            result=a/b;
        }else{
            result="Error";
        }
    }
    mostrar.value=result;
    PrimerNumero=result.toString();
    SegundoNumero="";
    operador="";
}
function borrarMostrar(){
    PrimerNumero="";
    SegundoNumero="";
    operador="";
    mostrar.value="";
}
