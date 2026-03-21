onload=function(){
    audioElem = document.getElementsByTagName('audio')[0]
}

document.getElementById('playBtn').onclick=function(){
    audioElem.play()
}


document.getElementById('stopBtn').onclick = function(){
    audioElem.pause()
}