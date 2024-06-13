function Somar(){

var num1;// declaração de variáves
var num2;
var res;

//coletar os dados do formulario

num1 = parseInt( document.getElementById("num1").value);
num2 = parseInt( document.getElementById('num2').value);
//Realizar  o calculo

res = num1 + num2;
document.getElementById("resultado").innerHTML = res;





}//fim do médoto somar

function Subtrair(){

    var num1;// declaração de variáves
    var num2;
    var res;
    
    //coletar os dados do formulario
    
    num1 = parseInt( document.getElementById("num1").value);
    num2 = parseInt( document.getElementById('num2').value);
    //Realizar  o calculo
    
    res = num1 - num2;
    document.getElementById("resultado").innerHTML = res;
    
    
    
    
}//fim do médoto Subtrair


function Dividir(){

    var num1;// declaração de variáves
    var num2;
    var res;
    
    //coletar os dados do formulario
    
    num1 = parseInt( document.getElementById("num1").value);
    num2 = parseInt( document.getElementById('num2').value);
    //Realizar  o calculo
    if(num2 <=0){
        res = "Impossivél dividir por zero!"
    }else{
        res = num1 / num2;
    }
    
    document.getElementById("resultado").innerHTML = res;
    
    
}//fim do médoto Dividir

function Multiplicar(){

    var num1;// declaração de variáves
    var num2;
    var res;
    
    //coletar os dados do formulario
    
    num1 = parseInt( document.getElementById("num1").value);
    num2 = parseInt( document.getElementById('num2').value);
    //Realizar  o calculo
    
    res = num1 * num2;

    document.getElementById("resultado").innerHTML = res;
    
    
    
    
}//fim do médoto Multiplicar

function tabuada(){

    var num1;
    var num2;

    //Coletar os números

    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);

    var resNum1 = "Tabuada do " + num1;
    var resNum2 = "Tabuada do " + num2;

    for(i=0;i<=10;i++){
        resNum1 += "\n" + num1 + " * " + i + " = " + (num1 * i);
        resNum2 += "\n" + num2 + " * " + i + " = " + (num2 * i);
    }

    document.getElementById("resultado").innerHTML ="\n" + resNum1 + "\n" + resNum2;
}//fim do método

 function potencia(){

    var num1;//declaração de variáveis
    var num2;
    var res;
    // Coletar os dados formulario
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    //Realizar o calculo
    res = Math.pow(num1,num2);//calcular a potencia
    document.getElementById("resultado").innerHTML = res;
 }

 function raiz(){

    var num1;//declaração de variáveis
    var num2;
    var resNum1;
    // Coletar os dados formulario
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    //Realizar o calculo
    resNum1 = Math.sqrt(num1);
    resNum2 = Math.sqrt(num2);

     document.getElementById("resultado").innerHTML = "\n" + resNum1 + "\n" + resNum2;
 }//fim mpétodo





