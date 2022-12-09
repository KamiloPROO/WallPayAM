const btnCodigo = document.getElementById("VerifyCodeBtn")

btnCodigo.addEventListener('click', () => {

    const codigo = document.getElementById("VerifyCodeRecoveri").value

    if (codigo === null || codigo === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa tu codigo de verificacion',
        })


    } else {

        VerificarCodigo();

    }

})