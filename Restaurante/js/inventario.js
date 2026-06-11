let codigo_producto = document.getElementById("codigo_producto").value;
let nombre_producto = document.getElementById("nombre_producto").value;
let cantidad = document.getElementById("cantidad").value;
let marca_producto = document.getElementById("marca_producto").value;


function ValidarDatos(){

    if(!/^[a-zA-Z]+$/.test(nombre_producto)){
        console.log("El nombre del producto no debe tener numeros");
    }

    if(!/^[a-zA-Z]+$/.test(marca_producto)){
        console.log("La marca del producto no debe tener numeros");
    }

    if(!/^[0-9]+$/.test(codigo_producto)){
        console.log("El codigo del producto no puede tener letras");
    }

    if(!/^[0-9]+$/.test(cantidad)){
        console.log("La cantidad no puede tener letras");
    }
}