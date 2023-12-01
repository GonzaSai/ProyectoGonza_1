let boton1 = document.querySelector('#boton1')

let imagen = document.querySelector('#imagen1')

let imagenCambiada = false;

boton1.onclick = function(){
    if(imagenCambiada == false){
        imagen.src = 'https://media.ambito.com/p/91858b0dcb697e218c6add24b9a554fd/adjuntos/239/imagenes/040/376/0040376595/730x0/smart/di-stefano-super-balon-orojfif.jfif'
        imagenCambiada = true
    }else{
        imagen.src = 'imágenes/Alfredo_Di_Stefano_River_Plate.jpg'
        imagenCambiada = false
    }
}