const captcha = document.getElementById('captcha');
const submitInput = document.getElementById('submitInput');
const refreshButton = document.getElementById('refresh-button');

const generate = () => {
    const text = '';
    const ctx = captcha.getContext('2d');
    ctx.clearRect(0, 0, captcha.width, captcha.height);
    ctx.font = '18px Arial';
    ctx.fillStyle = '#000';
    ctx.fillText(text, 10, 30);
    submitInput.value = '';
    submitInput.disabled = true;
};

const check = () => {
    const ctx = captcha.getContext('2d');
    const inputText = submitInput.value;
    const storedText = ctx.getImageData(0, 0, captcha.width, captcha.height).data.toString();
    if (inputText === storedText) {
        submitInput.disabled = true;
    }
};

refreshButton.addEventListener('click', generate);
submitInput.addEventListener('input', check);