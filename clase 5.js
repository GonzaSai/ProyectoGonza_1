let boton1 = document.querySelector('#boton1')
let boton2 = document.querySelector('#boton2')

let imagen = document.querySelector('#imagen1')

let imagenCambiada = false;

boton1.onclick = function(){
    if(imagenCambiada == false){
        imagen.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkYhk8_Y3FRhpSkGVD_CMLmTfHHSsicTf2Kg&usqp=CAU'
        imagenCambiada = true
    }else{
        imagen.src = 'imágenes/descarga.jfif'
        imagenCambiada = false
    }
}

boton2.onclick = function(){
    if(imagenCambiada == false){
        imagen.src = 'https://media.tycsports.com/files/2022/05/16/429044/maradona-1989_1440x810_wmk.webp'
        imagenCambiada = true
    }else{
        imagen.src = 'imágenes/descarga.jfif'
        imagenCambiada = false
    }
}