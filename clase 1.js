let texto = document.querySelector('#texto') 

let boton = document.querySelector('#boton')

let cambiarTexto = false;

boton.onclick = function(){
    if (cambiarTexto == false){
        texto.innerText = 'Alfredo Stéfano Di Stéfano Laulhén, mejor conocido como Alfredo Di Stéfano, fue un futbolista y entrenador argentino-colombiano-español, jugador legendario de los clubes River Plate, Millonarios y Real Madrid Club de Fútbol, desde 2000 hasta su fallecimiento fue presidente de honor del Real Madrid, al que como jugador debe sus mayores éxitos y reconocimientos mundiales y del que llegó a ser su máximo goleador histórico. Es considerado como uno de los mejores jugadores de todos los tiempos.'
        cambiarTexto = true
    }else {
        texto.innerText = 'Alfredo Stéfano Di Stéfano Laulhén, mejor conocido como Alfredo Di Stéfano, fue un futbolista y entrenador argentino-colombiano-español...'
        cambiarTexto = false
    }
}

let texto2 = document.querySelector('#texto2') 

let boton2 = document.querySelector('#boton2')

let cambiarTexto2 = false;

boton2.onclick = function(){
    if (cambiarTexto2 == false){
        texto2.innerText = 'Edson Arantes do Nascimento​, ​ más conocido como Pelé, fue un futbolista brasileño que jugó como delantero. Considerado como el mejor futbolista de todos los tiempos, fue el único en conseguir tres Copas Mundiales de Fútbol, así como uno de los pocos futbolistas en ganar el Balón de Oro Honorífico en el año 2013.'
        cambiarTexto2 = true
    }else {
        texto2.innerText = 'Edson Arantes do Nascimento​, ​ más conocido como Pelé, fue un futbolista brasileño que jugó como delantero...'
        cambiarTexto2 = false
    }
}

let texto3 = document.querySelector('#texto3') 

let boton3 = document.querySelector('#boton3')

let cambiarTexto3 = false;

boton3.onclick = function(){
    if (cambiarTexto3 == false){
        texto3.innerText = 'Cristiano Ronaldo dos Santos Aveiro, conocido como Cristiano Ronaldo, es un futbolista portugués. Juega como extremo izquierdo o delantero y su equipo actual es el Al-Nassr F. C. de la Liga Profesional Saudí.​Es internacional absoluto con la selección de Portugal, de la cual es capitán, máximo goleador histórico y jugador con más presencias con 200 partidos, logro alcanzado en las eliminatorias para la Eurocopa 2024, reconocido por el Libro Guinness de los récords.'
        cambiarTexto3 = true
    }else {
        texto3.innerText = 'Cristiano Ronaldo dos Santos Aveiro, conocido como Cristiano Ronaldo, es un futbolista portugués. Juega como extremo izquierdo...'
        cambiarTexto3 = false
    }
}

let texto4 = document.querySelector('#texto4') 

let boton4 = document.querySelector('#boton4')

let cambiarTexto4 = false;

boton4.onclick = function(){
    if (cambiarTexto4 == false){
        texto4.innerText = 'Diego Armando Maradona​ ​ fue un futbolista y entrenador argentino. Como jugador, se desempeñó como mediocampista ofensivo o delantero, y es reconocido por numerosos especialistas, ​​ exfutbolistas y personalidades internacionales​ como uno de los mejores futbolistas en la historia.'
        cambiarTexto4 = true
    }else {
        texto4.innerText = 'Diego Armando Maradona​ ​ fue un futbolista y entrenador argentino. Como jugador, se desempeñó como mediocampista ofensivo...'
        cambiarTexto4 = false
    }
}

let texto5 = document.querySelector('#texto5') 

let boton5 = document.querySelector('#boton5')

let cambiarTexto5 = false;

boton5.onclick = function(){
    if (cambiarTexto5 == false){
        texto5.innerText = 'Lionel Andrés Messi Cuccittini, conocido como Leo Messi, es un futbolista argentino que juega como delantero. Jugador histórico del Fútbol Club Barcelona, al que estuvo ligado veinte años, desde 2021 integra el plantel del Paris Saint-Germain de la Ligue 1 de Francia.'
        cambiarTexto5 = true
    }else {
        texto5.innerText = 'Lionel Andrés Messi Cuccittini, conocido como Leo Messi, es un futbolista argentino que juega como delantero. Jugador histórico del Fútbol Club Barcelona...'
        cambiarTexto5 = false
    }
}

