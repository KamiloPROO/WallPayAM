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

            for ( const compras of formData) {
                
                var formData1 = JSON.parse(compras.Json);
                
                console.log(formData1);

                for (const img of formData1.MediosPagoImagenes){

                    var imagenes = img

                }

                const productList = document.getElementById("product-list");
                const element = document.createElement("div")
         
                element.innerHTML += `
                <div class="planess">
                <div class="cardInversion" id="plan2">
                    
                   <div style="display: flex">
                   <div style="width: 100%">
                      <br>
                      <h3 style="margin-left: 0px; color: ${formData1.TextColorHeader}!important">${formData1.HtmlHeader}</h3>
                      <br>
                      <h3 style="margin-left: 0px; color: red ;">${formData1.HtmlBody}</h3>
                      <br>
                      <b style="margin-left: 0px; color: ${formData1.TextColorBody2};">${formData1.HtmlBody2}</b>
                      <br>
                      <br>
                      <img src="${imagenes}" style="width: 40px; margin-left: 30px;">
                      <br>
                    </div>
                    <button onclick="comprar()" style="background: #d79d13; color: black; font-weight: bold; "class="btnComprar">Buy</button>
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
