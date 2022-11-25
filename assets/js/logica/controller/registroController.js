function RegistrarUsuarios() {

    var sifrar = generateHash($("#contraseniaRegistro").val())

    const usuarioRegis = {
        
        Apellidos: $("#apellidosRegistro").val(),
        Celular: $("#celularRegistro").val(),
        Correo: $("#correoRegistro").val(),
        DireccionTexto: "",
        Nombres: $("#nombresRegistro").val(),
        Password: sifrar,
        PasswordSinCifrar: $("#contraseniaRegistro").val(),
        appId: 7,
        os: "ios"

    }

    registrar(usuarioRegis)
}

function generateHash(string) {

    var md = forge.md.sha256.create();
    md.start();
    md.update(string, "utf8");
    var hashText = md.digest().toHex();
    return hashText
}