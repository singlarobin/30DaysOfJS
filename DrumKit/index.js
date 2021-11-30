const playSound = event => {
    const audioElement = document.querySelector(`audio[data-key='${event.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${event.keyCode}']`);
    
    if (!audioElement) return;
    key.classList.add('playing');
    audioElement.currentTime = 0;
    audioElement.play();
}

const removeTransition = e => {
    if(e.propertyName!=='transform') return;
    console.log(e);
    console.log(e.target);
    e.target.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',e => removeTransition(e)));


window.addEventListener('keydown', e => playSound(e));

