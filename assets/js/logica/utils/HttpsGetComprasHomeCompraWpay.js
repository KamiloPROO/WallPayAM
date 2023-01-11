function comprar(val) {

    // alert("siuuuu")
    // window.location.href = "comprar2ronda.html"
    console.log(val);

    const idHpta = val;
    localStorage.setItem("IdCompraFinal", idHpta);

    if (idHpta != ""){
        window.location.href = "comprarWpay.html"
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'server under maintenance',
        })
    }

}



document.addEventListener('DOMContentLoaded', e => {

    var idLogin = localStorage.getItem("idPersonaLogin");
    var idCfUser = localStorage.getItem("idCfLogin");
    var idToken = localStorage.getItem("tokenLogin");
    var loading = document.getElementById('cargando');


    $.ajax({
        type: "POST",
        url: "https://appwollpay.app/Api/GetProductosMonedaVentaHtml",
        data: { "ID": idLogin, "IdCf": "3*1", "Token": idToken, "Skip": 1, "Take": 30, "so": "android", "App": 2 },
        success: function (data) {

            loading.style.display = 'none'

            var formData = JSON.parse(data);
            
            console.log(formData);

            for (const compras of formData) {

                var formData1 = JSON.parse(compras.Json);

                var idDeLaCompra = formData1.Id;
                localStorage.setItem("sacoid", idDeLaCompra);
                
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
                      <br>
                      <div style="display: flex">
                      <h3 class = "tasaaa" >${formData1.HtmlHeader}</h3>
                      </div>
                      <br>
                      <div style="display: flex">
                      <b class="cripto" style="color: ${formData1.TextColorBody2};">Cantidad Cripto</b>
                      <b class="tituColVa"> ${formData1.HtmlBody}</b>
                      <button class="btnetia" type="button" onclick="comprar(val = ${formData1.Id})" id="estamosgod" >Comprar</button>
                      </div>
                      <b class= "moverfe" style= " color: ${formData1.TextColorBody2} ">${formData1.HtmlBody2}</b>
                      <br>
                      <br>
                      <img src="${imagenes}" style="width: 35px; margin-left: 0px;" class = "imgss" >
                      <h1 class="raya">_________________________________________________</h1>
                    </div>
                    </div>
                    
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
