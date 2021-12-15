const hourHand = document.querySelector('.hourHand');
const minuteHand = document.querySelector('.minuteHand');
const secondHand = document.querySelector('.secondHand');

const setDate = () => {
    const now = new Date();

    const hour = now.getHours();
    const hoursDegree = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;

    const minute = now.getMinutes();
    const minutesDegree = ((minute / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    // secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    if(seconds == 0){
        secondHand.style.transform = `rotate(${secondsDegree}deg)`;
        // secondHand.style.transition = null;
    }
    else{
        secondHand.style.transform = `rotate(${secondsDegree}deg)`;
        // secondHand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
    }

    console.log('hour:', hour, '    ', hoursDegree);
    console.log('min:', minute, '    ', minutesDegree);
    console.log('sec:', seconds, '   ', secondsDegree);
};

setInterval(setDate, 1000);