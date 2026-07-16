function validarInformacion() {

    let ventas = document.getElementById("ventas").value;
    let ingresos = document.getElementById("ingresos").value;
    let egresos = document.getElementById("egresos").value;
    let valor = document.getElementById("valor").value;

    if (ventas.trim() === "" || ingresos.trim() === "" || egresos.trim() === "" || valor.trim() === "") {
        Swal.fire({
            icon: "warning",
            title: "Campos vacíos",
            text: "Todos los campos son obligatorios"
        });
        return;
    }

    if (!/^\d+$/.test(ventas)) {
        Swal.fire({
            icon: "error",
            title: "Ventas inválidas",
            text: "El campo Ventas solo debe contener números."
        });
        return;
    }

    if (!/^\d+$/.test(ingresos)) {
        Swal.fire({
            icon: "error",
            title: "Ingresos inválidos",
            text: "El campo Ingresos solo debe contener números."
        });
        return;
    }

    if (!/^\d+$/.test(egresos)) {
        Swal.fire({
            icon: "error",
            title: "Egresos inválidos",
            text: "El campo Egresos solo debe contener números."
        });
        return;
    }

    if (!/^\d+$/.test(valor)) {
        Swal.fire({
            icon: "error",
            title: "Valor inválido",
            text: "El campo Valor solo debe contener números."
        });
        return;
    }

    Swal.fire({
        icon: "success",
        title: "Registro correcto",
        text: "La información fue validada correctamente."
    });
}
