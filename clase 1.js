let hipervinculo = document.querySelector('#Ver mas')

let texto = document.querySelector('.card-text ')

let textoCambiado = fals;

hipervinculo.onclick = function (){
    if (textoCambiado == false){
        texto.innerText = 'Alfredo Stéfano Di Stéfano Laulhén, mejor conocido como Alfredo Di Stéfano, fue un futbolista y entrenador argentino-colombiano-español, jugador legendario de los clubes River Plate, Millonarios y Real Madrid Club de Fútbol, desde 2000 hasta su fallecimiento fue presidente de honor del Real Madrid, al que como jugador debe sus mayores éxitos y reconocimientos mundiales y del que llegó a ser su máximo goleador histórico. Es considerado como uno de los mejores jugadores de todos los tiempos.'
        textoCambiado = true
    }else {
        texto.innerText = 'Alfredo Stéfano Di Stéfano Laulhén, mejor conocido como Alfredo Di Stéfano, fue un futbolista y entrenador argentino-colombiano-español...'
    }
}