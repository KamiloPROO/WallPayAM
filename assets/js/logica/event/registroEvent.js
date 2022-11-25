const btnlogin = document.getElementById("crearCuentaRegistro")

btnlogin.addEventListener('click', () => {

    const nombresRegistro = document.getElementById("nombresRegistro").value
    const apellidosRegistro = document.getElementById("apellidosRegistro").value
    const celularRegistro = document.getElementById("celularRegistro").value
    const correoRegistro = document.getElementById("correoRegistro").value
    const passwordRegistro = document.getElementById("contraseniaRegistro").value

    if (nombresRegistro === null || nombresRegistro === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Tus Nombres',

        })


    } else if (apellidosRegistro === null || apellidosRegistro === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Tus Apellidos',

        })


    } else if (celularRegistro === null || celularRegistro === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Tu Celular',
        })

    } else if (correoRegistro === null || celularRegistro === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Tu Correo',
        })

    } else if (passwordRegistro === null || passwordRegistro === ""){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Tu Correo',
        })

    }else {

        RegistrarUsuarios();

    }

})