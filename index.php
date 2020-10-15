<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/croppie/2.6.5/croppie.css" integrity="sha512-2eMmukTZtvwlfQoG8ztapwAH5fXaQBzaMqdljLopRSA0i6YKM8kBAOrSSykxu9NN9HrtD45lIqfONLII2AFL/Q==" crossorigin="anonymous" />
    <link rel="stylesheet" href="CSS/main.css">
    <title>Demo</title>
</head>
<body>

    <div class="container">
        <div class="row">
            <div class="col-12 text-center mb-2">
                <h3>Acortar y subir imagen con JQuery y AJAX</h3>
            </div>

            <div class="col-12 text-center">
                <label id="label-input" class="estilo-label" for="subirImagen">Seleccionar Archivo</label>
                <input type="file" id="subirImagen" accept="image/*" style="display:none;">
                <div class="mt-3" id="imagenSubida"></div>
            </div>
        </div>
    </div>


    <div class="modal" tabindex="-1" role="dialog" id="subirImagenModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title">Recortar Imagen</h5>
                <button type="button" class="close cerrarModal" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-12">
                            <div id="imagen" style="width:100%; overflow:hidden;"></div>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                <button type="button" class="btn btn-primary cortar-imagen">Subir</button>
                <button type="button" class="cerrarModal btn btn-secondary" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
    

    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/croppie/2.6.5/croppie.js" integrity="sha512-vUJTqeDCu0MKkOhuI83/MEX5HSNPW+Lw46BA775bAWIp1Zwgz3qggia/t2EnSGB9GoS2Ln6npDmbJTdNhHy1Yw==" crossorigin="anonymous"></script>
    <script src="JS/app.js"></script>
</body>
</html>

<?php


?>