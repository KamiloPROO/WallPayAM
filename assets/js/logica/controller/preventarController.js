function ComprarPreventa() {

    var idLogin = localStorage.getItem("idPersonaLogin");


    const vamosaPreventar = {
        
        ID_USUARIO: idLogin,
        VALOR_TOTAL: $("#cantidadAPreventar").val(),


    }

    preventar(vamosaPreventar)
}