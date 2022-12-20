function comprar(val) {

    // alert("siuuuu")
    // window.location.href = "comprar2ronda.html"
    console.log(val);

    const idHpta = val;
    localStorage.setItem("IdCompraFinal", idHpta);

    if (idHpta != ""){
        window.location.href = "comprar2ronda.html"
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'server under maintenance',
        })
    }

}



document.addEventListener('DOMContentLoaded', e => {

    var idcfCuenta = localStorage.getItem("idcfComprar");
    var idCfUser = localStorage.getItem("idCfLogin");
    var idToken = localStorage.getItem("tokenLogin");
    var loading = document.getElementById('cargando');

    
    $.ajax({
        type: "POST",
        url: "https://appwollpay.app/Api/GetHistoricoCuentaTron",
        data: { "IdCf": idCfUser, "Token": idToken, "Skip": 1, "Take": 30, "so": "android", "IdApp": 2 , "IdCuentaCf": idcfCuenta},
        success: function (data) {

            loading.style.display = 'none'

            var formData = JSON.parse(data);


            for (const compras of formData) {

                var formData1 = JSON.parse(compras.Json);

                var idDeLaCompra = formData1.Id;
                localStorage.setItem("sacoid", idDeLaCompra);
                
                console.log(formData1);


                const productList = document.getElementById("divHistorial");
                const element = document.createElement("div")

                element.innerHTML += `

                <div class="cardInversionHistorico" id="plan2">
                    
                   <div class="containerHisto" >
                     <a class= "valorparse" style="color:${formData1.ColorValor}">${formData1.ValorParse}</a>
                     <a class= "saldooo" >${formData1.SaldoParse}</a>
                     <a class= "fechaaa">${formData1.FechaParse}</a>
                   </div>
                    
                </div>

             `;

                productList.appendChild(element)

            }

        },
        error: function () {
            loading.style.display = 'none'
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'server under maintenance',
            })
        }
    });

})
