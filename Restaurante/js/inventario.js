function validarFormulario() {
     let codigo_producto = document.getElementById("codigo_producto").value;
     let nombre_producto = document.getElementById("nombre_producto").value;
     let cantidad = document.getElementById("cantidad").value;
     let marca_producto = document.getElementById("marca_producto").value;

  if (
    codigo_producto === "" || nombre_producto === "" || cantidad === "" || marca_producto === "" 
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
    if (!/[0-9]/.test(codigo_producto)) {
      console.log("Codigo producto solo puede contener números");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Solo puede contener números",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (!/[0-9]/.test(nombre_producto)) {
      console.log("Nombre producto solo puede contener números");
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
      console.log(" solo puede contener números");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Solo puede contener números",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (!/[0-9]/.test(marca_producto)) {
      console.log("Marca producto solo puede contener números");
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

