const doc = document.getElementById('doc');
const btn = document.getElementById('send');
const edB = document.getElementById('edit');
const pinT = document.getElementById('pin');
const pb = document.getElementById('pb');
const docs = document.getElementById('docs');
const p = document.getElementById('p');
let pin;
let isNewPin;

if (localStorage.xionPin) {
    pin = JSON.parse(localStorage.xionPin);
    isNewPin = false;
} else {
    isNewPin = true;
}

function r() {
    document.location.reload()
}

function pinOk() {
    p.classList.add('dis');
    docs.classList.add('dis');
    pin = false;
    pin = JSON.parse(localStorage.xionPin);
}

function pinDown() {
    p.classList.remove('dis');
    docs.classList.remove('dis');
    pinT.value = ''
}

document.addEventListener("visibilitychange", function() {
    if (!document.hidden) {
        pinDown()
    }
});


if (localStorage.xionDoc) {
    doc.value = JSON.parse(localStorage.xionDoc);
}

pb.addEventListener('click', function() {
    if (isNewPin) {
        pin = pinT.value;
        localStorage.xionPin = JSON.stringify(pin);
        document.location.reload()
    } else {
        if (pinT.value == pin) {
            pinOk();
        } else {
            pinT.value = 'Wrong password!';
            setTimeout(r(), 3000);
        }
    }
})

edB.addEventListener('click', function() {
    pinDown();
    isNewPin = true;
})

btn.addEventListener('click', function () {
    localStorage.xionDoc = JSON.stringify(doc.value);
})