let boton1 = document.querySelector('#boton1')

let imagen = document.querySelector('#imagen1')

let imagenCambiada = false;

boton1.onclick = function(){
    if(imagenCambiada == false){
        imagen.src = 'https://fotos.perfil.com/2022/12/18/trim/1280/720/pele-1475578.jpg'
        imagenCambiada = true
    }else{
        imagen.src = 'imágenes/61527609_803.jpg'
        imagenCambiada = false
    }
}