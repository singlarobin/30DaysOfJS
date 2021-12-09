const hourHand = document.querySelector('.hourHand');
const minuteHand = document.querySelector('.minuteHand');
const secondHand = document.querySelector('.secondHand');

const setDate = () => {
    const now = new Date();

    const hour = now.getHours();
    const hoursDegree = ((hour/12)* 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;

    const minute = now.getMinutes();
    const minutesDegree = ((minute/60)* 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
};

setInterval(setDate, 1000);