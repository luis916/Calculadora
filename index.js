
// numeros
var cero = document.getElementById('0');
var uno = document.getElementById('1');
var dos = document.getElementById('2');
var tres = document.getElementById('3');
var cuatro = document.getElementById('4');
var cinco = document.getElementById('5');
var seis= document.getElementById('6');
var siete = document.getElementById('7');
var ocho = document.getElementById('8');
var nueve = document.getElementById('9');
//operaciones
var borrar = document.getElementById('borrar');
var suma = document.getElementById('suma');
var resta = document.getElementById('resta');
var division = document.getElementById('division');
var multiplicacion = document.getElementById('multiplicacion');
var resto = document.getElementById('resto');
var resultado = document.getElementById('resultado');
//entrada
var entradaDatos = document.getElementById('entradaDatos');

//eventos numeros

cero.addEventListener('click',function(){
    entradaDatos.value = entradaDatos.value+'0';
});
uno.addEventListener('click',function(){
    entradaDatos.value = entradaDatos.value+'1';
});
dos.addEventListener('click',function(){
    entradaDatos.value = entradaDatos.value+'2';
});
tres.addEventListener('click',function(){
    entradaDatos.value = entradaDatos.value+'3';
});
cuatro.addEventListener('click',function(){
    entradaDatos.value = entradaDatos.value+'4';
});
cinco.addEventListener('click',function(){
    entradaDatos.value = entradaDatos.value+'5';
});
seis.addEventListener('click',function(){
    entradaDatos.value = entradaDatos.value+'6';
});
siete.addEventListener('click',function(){
    entradaDatos.value = entradaDatos.value+'7';
});
ocho.addEventListener('click',function(){
    entradaDatos.value = entradaDatos.value+'8';
});
nueve.addEventListener('click',function(){
    entradaDatos.value = entradaDatos.value+'9';
});
// eventos operaciones
function limpiar(){
    entradaDatos.value = '';
}
var dato1 ='';
var dato2='';
var operaciones='';
suma.addEventListener('click',function(){
    dato1 = entradaDatos.value;
    operaciones ='+';
    limpiar();
    
});
resta.addEventListener('click',function(){
    dato1 = entradaDatos.value;
    operaciones ='-';
    limpiar();
});
division.addEventListener('click',function(){
    dato1 = entradaDatos.value;
    operaciones ='/';
    limpiar();
});
multiplicacion.addEventListener('click',function(){
    dato1 = entradaDatos.value;
    operaciones ='X';
    limpiar();
});
resto.addEventListener('click',function(){
    dato1 = entradaDatos.value;
    operaciones ='%';
    limpiar();
});
borrar.addEventListener('click',function(){
    dato1 = entradaDatos.value;
    limpiar();
});
// evento resultado
resultado.addEventListener('click',function(){
    dato2 = entradaDatos.value;
    resolver();
});

function resolver(){
    res = 0;
    switch(operaciones){
        case '+': res = parseInt(dato1)+parseInt(dato2);break;
        case '-': res = parseInt(dato1)-parseInt(dato2);break;
        case 'X': res = parseInt(dato1)*parseInt(dato2);break;
        case '/': res = parseInt(dato1)/parseInt(dato2);break;
        case '%': res = parseInt(dato1)%parseInt(dato2);break;

    }
    entradaDatos.value = res;
}