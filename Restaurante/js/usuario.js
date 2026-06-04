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
    if(nombre == '' || apellido == '' || numero_documento == '' || telefono == '' || correo == ''){
         console.log("Los campos están vacios")
    } 
    else {
    if(nombre != /[a-zA-Z]/){
        console.log("Los datos son incorrectos")
    }
    if(telefono.length() >= 10){
        console.log("Los datos son incorrectos")
    }
    if(correo != /[@]/){
        console.log("El correo es invalido")
    }
    if(apellido != /[a-zA-Z]/){
        console.log("Los datos son incorrectos")
    }
    if(numero_documento != /^[0-9]+$/){
        console.log("El numero de documento no puede tener letras")
    }
}
}
       


