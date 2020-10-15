$(document).ready(function(){

    $cortarImagen = $('#imagen').croppie({
       enableExif: true,
       viewport: {
         width:300,
         height:300,
         type:'circle' //se puede cambiar a 'square' si se desea un cuadrado en lugar de un circulo
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
       $('#subirImagenModal').modal('show');

       if (this.files[0] != '') {
           $("#continuarRecorte").removeClass("invisible");
           $("#deshacerRecorte").removeClass("invisible");
           $("#subirImagen").attr('disabled','');
           $("#label-input").removeClass("estilo-label");
           $("#label-input").addClass("estilo-label-dis");
       }
     });

   
    // Al hacer click se sube la imagen recortada y se muestra en pantalla el resultado
     $('.cortar-imagen').click(function(event){
        revertir();
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

     $("#deshacerRecorte").click(function(){
         revertir();
     });
});

function revertir(){
    $("#subirImagen").val('');
    $("#continuarRecorte").addClass("invisible");
    $("#deshacerRecorte").addClass("invisible");
    $("#label-input").removeClass("estilo-label-dis");
    $("#label-input").addClass("estilo-label");
    $("#subirImagen").removeAttr('disabled');
}