let boton1 = document.querySelector('#boton1')
let boton2 = document.querySelector('#boton2')

let imagen = document.querySelector('#imagen1')

let imagenCambiada = false;

boton1.onclick = function(){
    if(imagenCambiada == false){
        imagen.src = 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt3125544effd09308/639f60c65d0ea95c1ee0e6c3/GettyImages-1450106798.jpg?auto=webp&format=pjpg&width=3840&quality=60'
        imagenCambiada = true
    }else{
        imagen.src = 'imágenes/Lionel-Messi-Argentina-2022-FIFA-World-Cup_(cropped).jpg'
        imagenCambiada = false
    }
}

boton2.onclick = function(){
    if(imagenCambiada == false){
        imagen.src = 'https://media.tycsports.com/files/2021/08/05/316528/messi-balones-de-oro_1440x810_wmk.jpg?v=1'
        imagenCambiada = true
    }else{
        imagen.src = 'imágenes/Lionel-Messi-Argentina-2022-FIFA-World-Cup_(cropped).jpg'
        imagenCambiada = false
    }
}