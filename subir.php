<?php

//Verificamos que la imagen se haya seleccionado
if(isset($_POST["img"])){
    
    $data = $_POST["img"];

    //Dividimos el resultado que nos brinda para quedarnos solo con el hash en base 64
    $arrayImagen = explode(",", $data);

    //Decodificamos el hash
    $data = base64_decode($arrayImagen[1]);


    //Asignamos el nombre y la extension a la imagen
    $nombreImagen = time() . '.png';

    file_put_contents("imgs/".$nombreImagen, $data);

        //Mostramos una alerta de exito y la imagen
        echo <<<EOT
            <div class="alert alert-success" role="alert">
                Imagen subida correctamente, la puedes encontrar en la carpeta imgs
            </div>
            <img src="imgs/$nombreImagen" class="img-thumbnail" />
    EOT;
}
?>