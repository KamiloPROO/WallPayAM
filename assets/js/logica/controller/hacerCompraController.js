function HacemosCompra() {

    var idcff = localStorage.getItem("idCfLogin");
    var tokeen = localStorage.getItem("tokenLogin");
    var cuentaidcf = localStorage.getItem("idcfComprar");
    var idProduct = localStorage.getItem("IdCompraFinal");
    var tasaCamb = localStorage.getItem("TasaCambioK");

    const melo = document.getElementById("inputValorAComprar").value;

    const compra =  melo ;
 
     const hacerCompra = {

        Cantidad: compra,
        IdCuentaCompradorCf: cuentaidcf,
        IdProductoMoneda: idProduct,
        IdUsuarioCf: idcff,
        TokenUsuario: tokeen

     }

     console.log(melo);
     haceriCompra(hacerCompra)

}