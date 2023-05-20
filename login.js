document.getElementById("Login").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var username = document.getElementById("NombreUsuario").value;
    var password = document.getElementById("Contraseña").value;
    if (username === "admin" && password === "password") {
      window.location.href = "Index.html";
    } else {
      alert("Los datos ingresados en usuario o contraseña son inválidos");
    }
  });
  




