//richiamiamo la funzione per i 5 numeri casuali

let ul = document.getElementById('numbers-list');
let countdown = document.getElementById('countdown');
let instructions = document.getElementById('instructions');
let answersForm = document.getElementById('answers-form');
let button = document.querySelector('.btn');


//Creo il countdown
let seconds = 5;
countdown.textContent = seconds;

//creo la funzione per ridurre il tempo, dove una volta arrivato a 0 si ferma e appaiono i numeri da inserire da parte
function count(){
    if(seconds > 0){
        seconds --;
        countdown.textContent = seconds;
    }

    else{
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

//vado a ciclare la crazione di 5 numeri causuali
for (let i = 0; i < 5; i++) {
    let li = document.createElement("li");
    li.textContent = Math.floor(Math.random() * 50) + 1;
    ul.appendChild(li);
    randomNumbers.push(li.textContent);
}
console.log(randomNumbers);

function checkNumbers(){
    let input = document.querySelectorAll ('.form-control');
    let userNumbers = [];
    for(let i=0; i<5; i++){
        let userInput = input[i].value;
        userNumbers.push(parseInt(userInput));
    }
    console.log(userNumbers);
}

button.addEventListener('click', function (event) {
    event.preventDefault();
    checkNumbers();
});


