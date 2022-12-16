function addOptions(domElement, array) {
    
    var select = document.getElementsByName(domElement)[0];

    for (value in array) {
        var option = document.createElement("option");
        option.text = array[value];
        select.add(option);
    }
}


document.addEventListener('DOMContentLoaded', e => {

    // var idCompraS = localStorage.getItem("IdCompraFinal");
    var idCfUser = localStorage.getItem("idCfLogin");
    var idToken = localStorage.getItem("tokenLogin");
    var refeComprar = localStorage.getItem("referenciaComprar");
    var loading = document.getElementById('cargando')


    // var tiempo = document.getElementById("tiempoLimite");
    // var tasaCam = document.getElementById("HtmlHeader");
    // var cantiMini = document.getElementById("cantidadMinima");
    // var cantiMaxi = document.getElementById("cantidadMaxima");
    var optionNumRefe = document.getElementById("optionCuenta");
  

    optionNumRefe.textContent = refeComprar;
    

    $.ajax({
        type: "POST",
        url: "http://52.175.225.67:8094/Api/GetMediosPago",
        data: { "IdCf": idCfUser, "Token": idToken, "Skip": 1, "Take":10 , "so": "android", "IdApp": 2 },
        success: function (data) {

            loading.style.display = 'none'

            var formData = JSON.parse(data);

            for ( const compras of formData) {

                var formData1 = JSON.parse(compras.Json);

                const melo = formData1.Descripcion

                const listaa = {melo};

                addOptions("selectMetoPagos", listaa);

                console.log(formData1);
            }
            
        //    const limTiempo = formData.TiempoLimite;
        //    const tasaCambio = formData.TasaCambio;
        //    const cantMinima = formData.CantidadMinima;
        //    const cantMaxima = formData.CantidadMaxima;
        //    const cantidadMinima = tasaCambio * cantMinima;
        //    const cantidadMaxima = tasaCambio * cantMaxima;

        //     tiempo.textContent = limTiempo; 
        //     tasaCam.textContent = tasaCambio;
        //     cantiMini.textContent = cantidadMinima;
        //     cantiMaxi.textContent = cantidadMaxima;
            
        //    localStorage.setItem("TasaCambioK",tasaCambio);
        //    localStorage.setItem("CantiMin", cantMinima)
        //    localStorage.setItem("CantiMax", cantMaxima)
        },
        error: function () {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'server under maintenance',
            })
        }
    });

})
