let ventas = document.getElementById("ventas").value;
let fecha = document.getElementById("fecha").value;
let ingresos = document.getElementById("ingresos").value;
let egresos = document.getElementById("egresos").value;
let concepto = document.getElementById("concepto").value;
let valor = document.getElementById("valor").value;

if (ventas.trim() === "" || ingresos.trim() === "" || egresos.trim() === "" || valor.trim() === "") {
  alert("Todos los campos son obligatorios");
  return;
}

if (!/^\d+$/.test(ventas)) {
  console.log("El campo solo debe contener números");
  return;
}

if (!/^\d+$/.test(ingresos)) {
  console.log("El campo solo debe contener números");
  return;
}

if (!/^\d+$/.test(egresos)) {
  console.log("El campo solo debe contener números");
  return;
}

if (!/^\d+$/.test(valor)) {
  console.log("El campo solo debe contener números");
  return;
}