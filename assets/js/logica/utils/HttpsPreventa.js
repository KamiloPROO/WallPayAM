document.addEventListener('DOMContentLoaded', e => {

    var idLogin = localStorage.getItem("idPersonaLogin");
    var loading = document.getElementById('cargando2');

    $.ajax({
        type: "POST",
        url: "http://52.175.225.67:8059/api/stake/listarComprasPreventa",
        data: { "ID_USUARIO": idLogin },
        success: function (data) {

            loading.style.display = 'none'
            
            for (const datos of data){

                const productList = document.getElementById("product-list");
                const element = document.createElement("div")
         
                element.innerHTML += `
                <div class="planess">
                <div class="cardInversion" id="plan2">
                    
                    <div class="">
                      <h3 style="color: #d79d13">Preventa</h3>
                      <br>
                      <h3>Enviado</h3>
                      <h3 style="color: #d79d13">${datos.CANTIDAD_ENVIADA}</h3>
                      <br>
                      <h3>Stakeado</h3>
                      <h3>${datos.CANTIDAD_STAKED}</h3>
                      <br>
                      <h3>Total Compra</h3>
                      <h3>${datos.VALOR_TOTAL}</h3>
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
