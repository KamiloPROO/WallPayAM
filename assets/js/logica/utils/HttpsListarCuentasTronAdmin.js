document.addEventListener('DOMContentLoaded', e => {

    var idcff = localStorage.getItem("idCfLogin");
    var tokeen = localStorage.getItem("tokenLogin");

    var loading = document.getElementById('cargando');



    $.ajax({
        type: "POST",
        url: "https://appwollpay.app/Api/GetCuentasTronAdmin",
        data: { "IdCf": idcff, "Token": tokeen, "Skip": 1, "Take": 1000 },
        success: function (data) {

            loading.style.display = 'none'
            var formData = JSON.parse(data);

            

            // console.log(formData);


            for (const LisTodo of formData) {

                console.log(LisTodo);

                
                const productList = document.getElementById("product-list");
                const element = document.createElement("div")

                element.innerHTML += `
                <div onclick="wallet()" class="cardAdmin"
                style="background:url(./assets/img/fondotarjeta.jpg);background-repeat: no-repeat;background-size: cover;">
                <div class="containerCard " id="containerCardTron">
                    <br>
                    <h3 id="respuestaReferencia" class="moverRefeAdmin">${LisTodo.Referencia}</h3>
                    <br>
                    <span id="respuestaNombreUser" class="moverUserAdmin">${LisTodo.NombreUsuario}</span>
                    <br>
                    <br>

                    <div class="divTodoAdmin"  >

                    <div class="divTRX">
                    <h3 class="trxAdmin">TRX</h3>
                    <h3 id="respuestaSaldoTRX" class="moversaldosTrxAdmin">${LisTodo.Saldo}</h3>
                    </div>

                    <div class="divWPAY">
                    <h3 class="wplayAdmin">WPAY</h3>
                    <h3 id="respuestaSaldoWplay" class="moversaldosAdmin">${LisTodo.SALDO_WPAY}</h3>
                    </div>

                    <div class="divUSDT">
                    <h3 class="usdtAdmin">USDT</h3>
                    <h3 id="respuestaSaldoUSDT" class="moversaldosAdmin">${LisTodo.SALDO_USDT}</h3>
                    </div>

                    
                    </div>

                    
                    
                    
                    <br>
                    <br>
                    <div style="display: flex;">
                        <h3 id="respuestaActualizada" class="moverfechasAdmin">${LisTodo.FechaCreacionParse}</h3>
                        <h3 class="act">Creada</h3>
                    </div>
                </div>
            </div> 
        `;

                productList.appendChild(element)
            }

    },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")
        }
    });

})
