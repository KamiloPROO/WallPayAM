function CrearCuentaTron() {

    var idcff = localStorage.getItem("idCfLogin");
    var tokeen = localStorage.getItem("tokenLogin");
 
     const crearCuentaTron = {

         IdCf: idcff,
         Token: tokeen
     
     }

     crearTron(crearCuentaTron)

}