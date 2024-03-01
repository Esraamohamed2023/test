

const ageYesButton = document.getElementById('ageYes');
const ageNoButton = document.getElementById('ageNo');
const insuranceYesButton = document.getElementById('insuranceYes');
const insuranceNoButton = document.getElementById('insuranceNo');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const result = document.querySelector('.result');
const timer = document.getElementById('timer');

ageYesButton.addEventListener('click', () => {
    two.style.display = 'block';
    document.querySelector('.one').style.display = 'none';
});

ageNoButton.addEventListener('click', () => {
const isClassTwoVisible = getComputedStyle(two).display !== 'none';

if (isClassTwoVisible) {
result.style.display = 'block';
two.style.display = 'none';
startCountdown(1, 59); 
} else {
two.style.display = 'block';
document.querySelector('.one').style.display = 'none';
}
});

insuranceYesButton.addEventListener('click', () => {
    three.style.display = 'block';
    two.style.display = 'none';
});

insuranceNoButton.addEventListener('click', () => {
    result.style.display = 'block';
    three.style.display = 'none'; 
    two.style.display = 'none';
    startCountdown(1, 59); 
});

function startCountdown(minutes, seconds) {
    let totalSeconds = minutes * 60 + seconds;
    const interval = setInterval(() => {
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        timer.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        if (totalSeconds <= 0) {
            clearInterval(interval);
          
        } else {
            totalSeconds--;
        }
    }, 1000);
}