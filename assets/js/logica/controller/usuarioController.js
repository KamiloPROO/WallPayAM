function iniciarSesion() {
    var heass = generateHash($("#Password").val())
       

            const usuario = {
                UidGoogle:"sdfasdfasdfasd",
                Nombres: $("#Nombres").val(),
                Apellidos:$("#Apellidos").val(),
                Correo:$("#Correo").val(),
                Direccion:"lksajhdlashdlkjsad",
                Celular:$("#Celular").val(),
                NombreUsuario:$("#NombreUsuario").val(),
                Password:heass,
                IdCiudad:"4",
                So:"Web",
                Dispositivo:"Web",
                IdApp:"4",
                TokenFirebase:"kjzgddkgdkasgdkyusad",        
            }
            registro(usuario);
      
}

function generateHash(string)
{
        
    var md = forge.md.sha256.create();  
        md.start();  
        md.update(string, "utf8");  
        var hashText = md.digest().toHex();  
        return hashText
    }