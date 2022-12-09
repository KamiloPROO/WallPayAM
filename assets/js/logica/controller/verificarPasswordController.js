function VerificarCodigo() {

    const numeroUsuario = localStorage.getItem("NumUser")
    const passUsuario = localStorage.getItem("PassRecovery")

    const verificarCode = {

        codigo: $("#VerifyCodeRecoveri").val(),
        Usuario: numeroUsuario,
        password: passUsuario

    }

    verificamos(verificarCode)
}