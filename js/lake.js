let BGM = new Audio('/music/empty-hung-up-and-cold.mp3')
let airSFX = new Audio('/sfx/air-blowing.mp3')
let waterSFX = new Audio('/sfx/water.mp3')
let text = document.getElementById('text')

BGM.volume = 0.3
BGM.loop = true
BGM.play()