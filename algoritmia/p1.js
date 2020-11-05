let na = parseInt(prompt("Cantidad de números a ingresar: "));
let n1 = [];
let n2 = [];
let numero = 0;
let total = 1;
let auxTotal = 0;
if(Number.isInteger(na)){
    for(let i=0; i<na; i++){
        numero =parseInt(prompt("Ingrese Número: "));
        if(Number.isInteger(numero) && numero != null ){
            n1.push(numero);
        }            
        else{
            break;
            alert("No ingresaste un número - recarga la página");
        }            
    }
    for(let i=0; i<n1.length; i++){
        for(let j=0; j<n1.length; j++){
            if(i==j){
                continue;
            }
            else{                
                total = total * n1[j];
            }
        }
        n2.push(total);
        total = 1;
        
    }
}else{
    alert("No ingresaste un número - recarga la página");
}
alert("El arreglo original es: "+n1+" El arreglo resultante es: "+n2);