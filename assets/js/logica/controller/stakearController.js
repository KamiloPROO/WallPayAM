function VamosAStakear() {

    var idLogin = localStorage.getItem("idPersonaLogin");


    const vamosaStakear = {
        
        keypriv: "",
        value: $("#cantidadAStakear").val(),
        owneraddr: "",
        id_usuario: idLogin

    }

    stakear(vamosaStakear)
}