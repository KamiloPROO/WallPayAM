function IniciarSesion() {

    var sifrar = generateHash($("#PasswordLogin").val())

    const usuarioLogin = {

        Usuario: $("#UserLogin").val(),
        Password: sifrar,
        Token: ""

    }

    login(usuarioLogin);
}

function generateHash(string) {

    var md = forge.md.sha256.create();
    md.start();
    md.update(string, "utf8");
    var hashText = md.digest().toHex();
    return hashText
}