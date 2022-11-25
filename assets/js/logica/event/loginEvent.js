// $("#inicioSesion").click(function () {
    const button = document.getElementById("iniciarSesion")
    button.addEventListener("click", function(e){
        const nombre = document.getElementById("Nombres").value
        const usuario = document.getElementById("NombreUsuario").value
        const correo = document.getElementById("Correo").value
        const numero = document.getElementById("Celular").value
        const contrasenia = document.getElementById("Password").value
        const confirmarContrasenia = document.getElementById("confirmPass").value
        const genero = document.getElementById("confirmPass").value
        if(
            nombre === null || nombre === "" ||
            usuario === null || usuario === "" ||
            correo === null || correo === "" ||
            numero === null || numero === "" ||
            contrasenia === null || contrasenia === ""                        
            ){
                
            }else{
            if(contrasenia===confirmarContrasenia){                
                iniciarSesion();
            }else{
                alert("Las contraseñas no coinciden")
            }
        }
    })
  