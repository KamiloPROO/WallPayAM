const btnRecuperar = document.getElementById("recoveryPass")

btnRecuperar.addEventListener('click', () => {

    const celUser = document.getElementById("recoveryPasswordUser").value
    const passwordUser = document.getElementById("recoveryPassword").value
    const ConfirmPasswordUser = document.getElementById("ConfirmRecoveryPassword").value

    localStorage.setItem("NumUser",celUser)
    localStorage.setItem("PassRecovery",passwordUser)

    if (celUser === null || celUser === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Tu Usuario',
        })


    } else if (passwordUser === null || passwordUser === ""){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Tu Contraseña',
        })

    }else if (ConfirmPasswordUser === null || ConfirmPasswordUser === ""){
        
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Confirma Tu Contraseña',
        })

    } else if (passwordUser != ConfirmPasswordUser){
        
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Contraseñas no coinciden',
        })

    }else {

        RecuperarContrasenia();

    }

})