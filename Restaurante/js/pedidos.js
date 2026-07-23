function validarFormulario() {
  let producto = document.getElementById("producto").value.trim();
  let nombre_usuario = document.getElementById("nombre_usuario").value.trim();
  let direccion = document.getElementById("direccion").value.trim();
  let cantidad = document.getElementById("cantidad").value.trim();
  let telefono = document.getElementById("telefono").value.trim();

 
  if (
    producto === "" || 
    nombre_usuario === "" || 
    direccion === "" || 
    cantidad === "" || 
    metodo_pago === "" || 
    telefono === ""
  ) {
    console.log("Los campos están vacíos");
    Swal.fire({
      icon: "error",
      title: "Campos vacíos",
      text: "Por favor, completa todos los campos del formulario.",
      confirmButtonColor: "#3085d6"
    });
    return;
  }

  
  const soloNumeros = /^[0-9]+$/;

  if (!soloNumeros.test(producto)) {
    mostrarAlertaError("El producto solo puede contener números");
    return;
  }

  if (!soloNumeros.test(nombre_usuario)) {
    mostrarAlertaError("El nombre de usuario solo puede contener números");
    return;
  }

  if (!soloNumeros.test(direccion)) {
    mostrarAlertaError("La dirección solo puede contener números");
    return;
  }

  if (!soloNumeros.test(cantidad)) {
    mostrarAlertaError("La cantidad solo puede contener números");
    return;
  }


  if (!soloNumeros.test(telefono)) {
    mostrarAlertaError("El teléfono solo puede contener números");
    return;
  }

  // 3. Si todo está correcto
  Swal.fire({
    icon: "success",
    title: "¡Guardado!",
    text: "Tus datos se han guardado correctamente.",
    timer: 2000,
    showConfirmButton: false
  });
}


function mostrarAlertaError(mensaje) {
  console.log(mensaje);
  Swal.fire({
    icon: "error",
    title: "Dato inválido",
    text: mensaje,
    confirmButtonColor: "#3085d6"
  });
}


document.getElementById("guardar").onclick = validarFormulario;