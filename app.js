// Agrega aquí los certificados que quieras validar.
// El QR llevará a: https://TU-USUARIO.github.io/?codigo=FS-001

const certificados = {
  "FS-001": {
    de: "Mamá",
    para: "Nombre del destinatario",
    servicio: "Masaje Completo"
  },
  "FS-002": {
    de: "Mamá",
    para: "Otro destinatario",
    servicio: "Masaje Completo"
  }
};

const params = new URLSearchParams(window.location.search);
const codigo = (params.get("codigo") || "").toUpperCase().trim();

const content = document.getElementById("content");
const invalid = document.getElementById("invalid");

if (certificados[codigo]) {
  const certificado = certificados[codigo];

  document.getElementById("from").textContent = certificado.de;
  document.getElementById("to").textContent = certificado.para;
  document.getElementById("code").textContent = codigo;
} else {
  content.classList.add("hidden");
  invalid.classList.remove("hidden");
}