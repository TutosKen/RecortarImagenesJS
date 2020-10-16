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
        $("#archivoGrande").hide();
        $("#archivoIncorrecto").hide();
        
        var archivo = $('#subirImagen').val().split('\\').pop();
        var ext = archivo.split('.').pop();
        var extAllowed = ['jpeg','jpg','gif','png'];

        if (extAllowed.includes(ext)) {
          if (this.files[0].size < 1000000) {
          $("#archivoIncorrecto").hide();
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
        }else{
          $("#archivoGrande").show();
        }
      }else{
        $("#archivoIncorrecto").show();
      }
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