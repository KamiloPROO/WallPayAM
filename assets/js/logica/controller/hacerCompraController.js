function HacemosCompra() {

    var idcff = localStorage.getItem("idCfLogin");
    var tokeen = localStorage.getItem("tokenLogin");
    var cuentaidcf = localStorage.getItem("idcfComprar");
    var idProduct = localStorage.getItem("IdCompraFinal");

    const melo = document.getElementById("selectCategorias").value;
 
     const hacerCompra = {

        Cantidad: melo,
        IdCuentaCompradorCf: cuentaidcf,
        IdProductoMoneda: idProduct,
        IdUsuarioCf: idcff,
        TokenUsuario: tokeen
     }

     console.log(melo);
     haceriCompra(hacerCompra)

}