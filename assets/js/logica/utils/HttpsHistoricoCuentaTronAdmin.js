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
        url: "https://appwollpay.app/Api/GetHistoricoCuentaTronAdmin",
        data: { "IdCf": idCfUser, "Token": idToken, "Skip": 1, "Take": 3000 },
        success: function (data) {

            loading.style.display = 'none'

            console.log(data);

            

            var formData = JSON.parse(data);

    
            for (const compras of formData) {

                console.log(compras);

                // var formData1 = JSON.parse(compras.Json);

                // var idDeLaCompra = formData1.Id;
                // localStorage.setItem("sacoid", idDeLaCompra);
                
                // console.log(formData1);

                const productList = document.getElementById("divHistorial");
                const element = document.createElement("div")

                element.innerHTML += `

                <div class="cardInversionHistorico" id="plan2">

                <div class="containerHistoAdmin">

                    <a class="descripHisAdmin">${compras.hash}</a>

                    <div class="divHisAdminPadre">


                        <div class="cuentaDe">

                            <div>
                                <a class="tituCuentaDe">Cuenta De:</a>
                            </div>

                            <a class="resCuentaDeS">${compras.CuentaDe}</a>

                        </div>

                        <div class="cuentaOr">

                            <div>
                                <a class="tituCuentaDe">Cuenta Para:</a>
                            </div>
                            <a class="resCuentaDeS">${compras.CuentaOr}</a>

                        </div>

                    </div>

                    <div class="divHisAdminPadre2">


                        <div class="cuentaDe">

                            <div>
                                <a class="tituCuentaDe">Saldo:</a>
                            </div>

                            <a class="resCuentaDe">${compras.Saldo}</a>

                        </div>

                        <div class="cuentaOr">

                            <div>
                                <a class="tituCuentaDe">Valor:</a>
                            </div>
                            <a class="resCuentaDe">${compras.Valor}</a>

                        </div>

                    </div>

                    <a class="descripHisAdmin">${compras.Fecha}</a>

                    
                </div>

            </div>

             `
             ;

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
