document.addEventListener('DOMContentLoaded', e => {

    var idLogin = localStorage.getItem("idPersonaLogin");
    var idCfUser = localStorage.getItem("idCfLogin");
    var idToken = localStorage.getItem("tokenLogin");
    var loading = document.getElementById('cargando')


    $.ajax({
        type: "POST",
        url: "http://52.175.225.67:8094/Api/GetProductosMonedaVentaHtml",
        data: { "ID": idLogin, "IdCf": idCfUser, "Token": idToken, "Skip": 1, "Take": 6, "so": "android", "App": 2 },
        success: function (data) {

            loading.style.display = 'none'

            var formData = JSON.parse(data);
            console.log(formData);

            for (const compras of formData) {

                var formData1 = JSON.parse(compras.Json);

                console.log(formData1);

                for (const img of formData1.MediosPagoImagenes) {

                    var imagenes = img

                }

                const productList = document.getElementById("product-list");
                const element = document.createElement("div")

                element.innerHTML += `
                <div class="planess">
                <div class="cardInversionMela" id="plan2">
                    
                   <div style="display: flex">
                   <div style="width: 100%">
                      <div style="display: flex">
                      <a class="cir" >C</a>
                      <b class="coin" >CoinNow</b>
                      </div>
                      <div style="display: flex">
                      <b class="ordenes" >100 ordenes</b>
                      <b class="rayitaa" >|</b>
                      <b class="ordenes2" >Finalizacion 100%</b>
                      </div>
                      <br>
                      <div style="display: flex">
                      <h3>${formData1.HtmlHeader}</h3>
                      </div>
                      <br>
                      <div style="display: flex">
                      <b style="margin-left: 0px; color: ${formData1.TextColorBody2}; font-size: 18px;">Cantidad Cripto</b>
                      <b class="tituColVa"> 84.18 USDT</b>
                      <a class="btnetia" type="button" onclick="comprar()" >Comprar</a>
                      </div>
                      <div style="display: flex">
                      <b style="margin-left: 0px; color: ${formData1.TextColorBody2}; font-size: 18px;">Limite</b>
                      <b class="tituColVa"> Col$ 50.0000.000 - 300.000.000</b>
                      </div>
                      <br>
                      <img src="${imagenes}" style="width: 40px; margin-left: 0px;">
                      <h1 class="raya">____________________________________________</h1>
                    </div>
                    </div>
                    
                </div>
              </div>
             `;

                productList.appendChild(element)

            }

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
