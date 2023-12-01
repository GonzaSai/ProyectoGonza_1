let boton1 = document.querySelector('#boton1')

let imagen = document.querySelector('#imagen1')

let imagenCambiada = false;

boton1.onclick = function(){
    if(imagenCambiada == false){
        imagen.src = 'https://resizer.glanacion.com/resizer/v2/cristiano-ronaldo-celebra-tras-convertir-su-VVURF6CSJNBUTOKW2IIZDIF4X4.JPG?auth=b9b1482f64ebef7adb8350aee09cb9993fdfcd4baf19447945cb39cb04ca13ad&width=768&quality=70&smart=false'
        imagenCambiada = true
    }else{
        imagen.src = 'imágenes/descarga (1).jfif'
        imagenCambiada = false
    }
}