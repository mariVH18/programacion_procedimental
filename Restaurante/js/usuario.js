function validarFormulario() {
     let nombre = document.getElementById("nombre").value;
     let apellido = document.getElementById("apellido").value;
     let numero_documento = document.getElementById("numero_documento").value;
     let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;


  if (
    nombre === "" || apellido === "" || numero_documento === "" || telefono === "" || correo === ""
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
    if (!/^[a-zA-Z]+$/.test(nombre)) {
      console.log("Nombre producto solo puede contener letras");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Solo puede contener letras",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (!/^[a-zA-Z]+$/.test(apellido)) {
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

    if (!/[0-9]/.test(numero_documento)) {
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

     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
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




