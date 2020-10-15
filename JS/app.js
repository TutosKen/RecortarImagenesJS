$(document).ready(function(){

    $cortarImagen = $('#imagen').croppie({
       enableExif: true,
       viewport: {
         width:300,
         height:300,
         type:'square' //se puede cambiar a 'circle' si se desea un circulo en lugar de un cuadrado
       },
       boundary:{
         width:300,
         height:300
       }
     });
   

     $('#subirImagen').on('change', function(){
        if (document.querySelectorAll(".img-thumbnail").length > 0) {
            $(".img-thumbnail").hide();
            $(".alert").hide();
        }
        // Se obtiene la imagen que el usuario selecciono
       var reader = new FileReader();
       reader.onload = function (event) {
         $cortarImagen.croppie('bind', {
           url: event.target.result
         }).then(function(){
           console.log('JQuery Bind Completado');
         });
       }

       // Se muestra el modal con la imagen
       reader.readAsDataURL(this.files[0]);
       $('#subirImagenModal').modal({
        backdrop: 'static',
        keyboard: false
       });
       $('#subirImagenModal').modal('show');
     });

   
    // Al hacer click se sube la imagen recortada y se muestra en pantalla el resultado
     $('.cortar-imagen').click(function(event){
       $cortarImagen.croppie('result', {
         type: 'canvas',
         size: 'viewport'
       }).then(function(response){
         $.ajax({
           url:"subir.php",
           type: "POST",
           data:{"img": response},
           success:function(data)
           {
             $('#subirImagenModal').modal('hide');
             $('#imagenSubida').html(data);
           }
         });
       })
     });

     $(".cerrarModal").click(function(){
        $("#subirImagen").val('');
     });
});