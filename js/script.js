//richiamiamo la funzione per i 5 numeri casuali

let ul = document.getElementById('numbers-list');
let countdown = document.getElementById('countdown');
let instructions = document.getElementById('instructions');
let answersForm = document.getElementById('answers-form');
let button = document.querySelector('.btn');
let result = document.getElementById('message')


//Creo il countdown
let seconds = 5;
countdown.textContent = seconds;

//creo la funzione per ridurre il tempo, dove una volta arrivato a 0 si ferma e appaiono i numeri da inserire da parte
function count() {
    if (seconds > 0) {
        seconds--;
        countdown.textContent = seconds;
    }

    else {
        countdown.textContent = 'Ora indica i 5 numeri';
        ul.classList.add('d-none');
        instructions.classList.add('d-none');
        answersForm.classList.remove('d-none');
        clearInterval(timer)

    }
}
//creo la costante per il timer
const timer = setInterval(count, 1000);

//creo l'arrayper i numeri casuali
let randomNumbers = [];
let userNumbers = [];

//vado a ciclare la crazione di 5 numeri causuali
for (let i = 0; i < 5; i++) {
    let li = document.createElement("li");
    let numbers = Math.floor(Math.random() * 50) + 1;
    li.textContent = numbers;
    ul.appendChild(li);
    randomNumbers.push(numbers);
}
console.log(randomNumbers);

function checkNumbers() {
    let input = document.querySelectorAll('.form-control');
    for (let i = 0; i < 5; i++) {
        let userInput = input[i].value;
        userNumbers.push(parseInt(userInput));
    }
    console.log(userNumbers);
}

//creo la funzione per vedere i numeri indovinati
function checkResult(array1, array2) {

    randomNumbers.sort(function(a, b) {
        return a - b;
    });

    userNumbers.sort(function(a, b) {
        return a - b;
    });


    if (array1.length !== array2.length) {
        return false;
    }

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}


button.addEventListener('click', function (event) {
    event.preventDefault();
    checkNumbers();
    if (checkResult(userNumbers, randomNumbers)) {
        result.textContent = 'HAI VINTO!';
    }
    else {
        result.textContent = 'HAI PERSO!';
    }
});






