function validarFormulario() {
  let ventas = document.getElementById("ventas").value;
  let fecha = document.getElementById("fecha").value;
  let ingresos = document.getElementById("ingresos").value;
  let egresos = document.getElementById("egresos").value;
  let concepto = document.getElementById("concepto").value;
  let valor = document.getElementById("valor").value;

  if (
    ventas === "" || fecha === "" || ingresos === "" || egresos === "" || concepto === "" || valor === ""
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
    if (!/[0-9]/.test(ventas)) {
      console.log("Ventas solo puede contener números");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Solo puede contener números",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (!/[0-9]/.test(ingresos)) {
      console.log("Ingresos solo puede contener números");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Solo puede contener números",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (!/[0-9]/.test(egresos)) {
      console.log("Egresos solo puede contener números");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Solo puede contener números",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (!/[0-9]/.test(valor)) {
      console.log("Valor solo puede contener números");
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