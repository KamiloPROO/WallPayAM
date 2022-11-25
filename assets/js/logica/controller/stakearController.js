function VamosAStakear() {

    var idLogin = localStorage.getItem("idPersonaLogin");


    const vamosaStakear = {
        
        keypriv: "",
        value: $("#cantidadAStakear").val(),
        ownerador: "",
        id_usuario: idLogin

    }

    stakear(vamosaStakear)
}