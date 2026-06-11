let nombre = document.getElementsById("nombre").value;
let apellido = document.getElementsById("apellido").value;
let tipo_documento = document.getElementsByName("tipo_documento").value;
let numero_documento = document.getElementsByName("numero_documento").value;
let telefono = document.getElementsById("telefono").value;
let correo = document.getElementsById("correo").value;
let genero = document.getElementsByName("genero").value;
let cargo = document.getElementsByName("cargo").value;
let fecha_nacimiento = document.getElementsById("fecha_nacimiento").value;
let contraseña = document.getElementsById("contraseña").value;

function ValidarDatos(){

    if(!/^[a-zA-Z]+$/.test(nombre)){
        console.log("El nombre solo debe contener letras");
    }

    if(!/^[a-zA-Z]+$/.test(apellido)){
        console.log("El apellido solo debe contener letras");
    }

    if(!/^[0-9]+$/.test(numero_documento)){
        console.log("El número de documento no puede tener letras");
    }

    if(telefono.length < 10){
        console.log("El teléfono debe tener mínimo 10 números");
    }

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)){
        console.log("El correo es inválido");
    }
}
       


