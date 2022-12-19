

function PublicarVentaGod() {

    var idcff = localStorage.getItem("idCfLogin");
    var tokeen = localStorage.getItem("tokenLogin");
    var cuentaidcf = localStorage.getItem("idcfComprar");

//    select tipo moneda

    var seleMoneda = document.getElementById("selecCuenta").value;

    if (seleMoneda == "USDT") {

        var idMoneda = 1;
        var idTokenMoneda = "tokenUSDT";

    } else if (seleMoneda == "WPAY") {
        var idMoneda = 3;
        var idTokenMoneda = "tokenWPAY";
    };

    //    select hora
    var selcHoras = document.getElementById("selecTiempoHoras").value;

    if (selcHoras == "1 Hora") {
        var minutosHora = 60
    } else if (selcHoras == "2 Horas") {
        var minutosHora = 120
    } else if (selcHoras == "3 Horas") {
        var minutosHora = 180
    } else if (selcHoras == "4 Horas") {
        var minutosHora = 240
    }

    //    select metodo de pago

var selcMetoPago = document.getElementById("selectMetoPagos").value;

var ListMetoSeleccionado = []
   
if (selcMetoPago == "Nequi") {

    var metoSeleccionado = {
        Descripcion: "Nequi",
        Extra: $("#inputNumCuenta").val(),
        Id: 2,
        Imagen: "http://52.175.225.67:8094//uploads/wallpay/ic_nequi.png"
    }
    
    ListMetoSeleccionado.push(metoSeleccionado)
    console.log( "neq" + ListMetoSeleccionado);

} else if (selcMetoPago == "Bancolombia") {
    var metoSeleccionado = {
    
        Descripcion: "Bancolombia",
        Extra: $("#inputNumCuenta").val(),
        Id: 3,
        Imagen: "http://52.175.225.67:8094//uploads/wallpay/ic_bancolombia.png"
    }
        
    ListMetoSeleccionado.push(metoSeleccionado)
    console.log("banco" + ListMetoSeleccionado);

} else if (selcMetoPago == "Davivienda") {
    var metoSeleccionado = [{
        Descripcion: "Davivienda",
        Extra: $("#inputNumCuenta").val(),
        Id: 4,
        Imagen: "http://52.175.225.67:8094//uploads/wallpay/ic_davivienda.png"
}]
    ListMetoSeleccionado.push(metoSeleccionado)
} else if (selcMetoPago == "Banco de Bogota") {
    var metoSeleccionado = {
        Descripcion: "Banco de Bogota",
        Extra: $("#inputNumCuenta").val(),
        Id: 4,
        Imagen: "http://52.175.225.67:8094//uploads/wallpay/ic_bancobogota.png"
    }
    ListMetoSeleccionado.push(metoSeleccionado)
}

   var xd = JSON.stringify(ListMetoSeleccionado);

   console.log(xd);

    const publicaremosVenta = {

        CantidadMaxima: $("#inputCantMaxi").val(),
        CantidadMinima: $("#inputCantMini").val(),
        Descripcion: $("#inputDescrip").val(),
        IdCuentaOrigenCf: cuentaidcf,
        IdTipoMoneda: idMoneda,
        IdUsuarioCf: idcff,
        IsActivo: "false",
        MediosPago: [{
            Descripcion: metoSeleccionado.Descripcion,
            Extra: metoSeleccionado.Extra,
            Id: metoSeleccionado.Id,
            Imagen: metoSeleccionado.Imagen
    }],
        MinutosLimitePago: minutosHora,
        TasaCambio: $("#inputTasaCambio").val(),
        Titulo: $("#inputTitulo").val(),
        TokenUsuario: tokeen,
        idTokenMoneda: idTokenMoneda

    }
  
    console.log(publicaremosVenta);
    publicarSiu(publicaremosVenta)
}