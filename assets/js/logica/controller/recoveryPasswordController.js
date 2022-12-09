function RecuperarContrasenia() {

    const vamosaRecuperar = {
        
        usuario: $("#recoveryPasswordUser").val(),
        password: $("#recoveryPassword").val()


    }

    recoveryPass(vamosaRecuperar)
}