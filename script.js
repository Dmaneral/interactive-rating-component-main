const submitBtn = document.getElementById('btn');
const votePage = document.querySelector('.rating-cont');
const thankPage = document.querySelector('.thank-container'); 
let rating = document.getElementById('rating');
let button = document.querySelectorAll('.circle');
let button1 = Array.from(button);

thankPage.classList.add('hidden');
submitBtn.addEventListener('click', onSubmit);

let rateValue = 0;

function onSubmit(){
    thankPage.classList.remove('hidden');
    votePage.classList.add('hidden');
    
    rating.innerHTML = `You selected ${rateValue} out of 5`;
    console.log("submited");
}

button1.forEach(function (val) {
    val.addEventListener("click", clickHandler);
});

function clickHandler(event) {
    button1.forEach((val) => {
        if(event.target.innerHTML == val.innerHTML) {
            rateValue = val.innerHTML
            console.log(val.innerHTML);
        }
    });
}