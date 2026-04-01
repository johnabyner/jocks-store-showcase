const homeImg = document.querySelector('.homeImg');

let currentIndex = 0; 
const gifs = [
    'img/chrollo.gif',
    'img/speed.gif'
]

document.addEventListener('click', (e)=> {
    let el = e.target;

    if(el.classList.contains('homeLeftButton')){
       if(currentIndex != 0){ //se nao for o gif inicial
        currentIndex--;
        homeImg.src = gifs[currentIndex]
       }else{ //se estiver no gif inicial, vai ir para o ultimo
            currentIndex = gifs.length - 1;
            homeImg.src = gifs[currentIndex]
       }
    }

    if(el.classList.contains('homeRightButton')){
        if(currentIndex != gifs.length - 1){ //se for diferente do tamanho maximo
            currentIndex++;
            homeImg.src = gifs[currentIndex];
        }else{ //se estiver no tamanho maximo ele volta pro zero
            currentIndex = 0;
            homeImg.src = gifs[currentIndex];
        }

    }   
    console.log(currentIndex);
})