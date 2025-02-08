document.getElementById ("registroForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita el envio del formulario si hay errores

  // Obtener valores de los campos
  let nombre = document.getElementById("nombre").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmPassword").value.trim();

  //Limpiar mensajes de error

  document.getElementById("errorNombre").innerText = "";
  document.getElementById("errorEmail").innerText = "";
  document.getElementById("errorPassword").innerText = "";
  document.getElementById("errorConfirmPassword").innerText = "";

  let errores = false;


    // Validar Nombre
    if (nombre === "") {
        document.getElementById("errorNombre").innerText = "⚠️ El nombre no puede estar vacío";
        errores = true;
    }

    // Validar Email con expresión regular
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("errorEmail").innerText = "⚠️ Ingresa un email válido";
        errores = true;
    }

    // Validar Contraseña (mínimo 6 caracteres)
    if (password.length < 6) {
        document.getElementById("errorPassword").innerText = "⚠️ La contraseña debe tener al menos 6 caracteres";
        errores = true;
    }

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
        document.getElementById("errorConfirmPassword").innerText = "⚠️ Las contraseñas no coinciden";
        errores = true;
    }

    // Si no hay errores, enviar el formulario (en este caso, solo mostramos un mensaje)
    if (!errores) {
        alert("✅ ¡Registro exitoso!");
        document.getElementById("registroForm").reset(); // Limpiar formulario
    }

  

})