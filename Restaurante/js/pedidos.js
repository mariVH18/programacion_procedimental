function validarFormulario() {
     let producto = document.getElementById("producto").value;
     let nombre_usuario = document.getElementById("nombre_usuario").value;
     let direccion = document.getElementById("direccion").value;
     let cantidad = document.getElementById("cantidad").value;
    let telefono = document.getElementById("telefono").value;


  if (
    producto === "" || nombre_usuario === "" || direccion === "" || cantidad === "" || telefono === ""
  ) {
    console.log("Los campos están vacíos");
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Los campos están vacíos",
      showConfirmButton: false,
      timer: 1500
    });
    return;
  } else {
    if (!/[0-9]/.test(producto)) {
      console.log("Nombre producto solo puede contener numeros");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Solo puede contener numeros",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (!/^[a-zA-Z]+$/.test(nombre_usuario)) {
      console.log("Apellido solo puede contener Letras");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Solo puede contener letras",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (!/[0-9]/.test(direccion)) {
      console.log("Numero de documento solo puede contener números");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Solo puede contener números",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

     if (!/[0-9]/.test(cantidad)) {
      console.log("Correo tiene que tener @");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Necesita un @",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (!/[0-9]/.test(telefono)) {
      console.log("Telefono solo puede contener números");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Solo puede contener números",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Tus datos se han guardado",
      showConfirmButton: false,
      timer: 1500
    });
  }
}

document.getElementById("guardar").onclick = validarFormulario;
