let dingSFX = new Audio('sfx/ding.mp3')
let title = document.getElementById('title')
let titleText = document.querySelectorAll('.title-text')
let hideFirst = document.querySelectorAll('.hide-first')
let start = document.getElementById('start')

start.addEventListener('click',()=>{
    dingSFX.pause()
    dingSFX.currentTime = 0
    dingSFX.play()
    setTimeout(() => {
        dingSFX.pause()
        //window.location.href = window.location.origin + '/page/maze.html'
        window.location.href += 'page/maze.html'
        /* let modeNo = Math.round(Math.random()*1)
        switch (modeNo) {
            case 0:
                //window.location.href += window.location.origin + '/page/maze.html'
                window.location.href += '/page/maze.html'
                break;
            case 1:
                //window.location.href = window.location.origin + '/page/lake.html'
                window.location.href += '/page/maze.html'
                break;
        } */
    }, 2000);

})

setTimeout(() => {
    for (let i = 0; i < titleText.length; i++) {
    titleText[i].classList.add('show')
}
}, 200);


setTimeout(() => {
    title.style.display = 'none'
    for (let i = 0; i < hideFirst.length; i++) {
        hideFirst[i].style.display = 'block'
    }
}, 7000);
