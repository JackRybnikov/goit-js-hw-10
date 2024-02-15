import iziToast from "izitoast";
import "../../node_modules/izitoast/dist/css/iziToast.min.css";

const submitBtn = document.querySelector(".submit-btn");
const inputDelay = document.querySelector(".input-delay");
const inputRadio = document.querySelector(".radio-input");
const form = document.querySelector(".form");

let shouldResolve = true;

function showFulfilledMessage(delay){
    iziToast.success({
        backgroundColor: '#B5EA7C',
        messageColor: '#fff',
        position: 'topCenter',
        message: `✅ Fulfilled promise in ${delay}ms`
    });
};

function showRejectedMessage(delay){
    iziToast.error({
        backgroundColor: '#FFBEBE',
        messageColor: '#fff',
        position: 'topCenter',
        message: `❌ Rejected promise in ${delay}ms`
    });
};




const makePromise = ({ delay, shouldResolve }) => {
    return new Promise((resolve, reject) => {
         setTimeout(() => {
                  if(shouldResolve) {
                      resolve(delay)
                  } else {
                      reject(delay)
                  }
              }, delay);
    });
};

inputRadio.addEventListener("change", e => {
    e.stopPropagation();

    if(e.target.value === "fulfilled"){
        shouldResolve = true;
    }else {
        shouldResolve = false;
    }
});

form.addEventListener("submit", e => {
    e.preventDefault();

    const delay = inputDelay.value;

    makePromise({ delay, shouldResolve })
    .then(value => showFulfilledMessage(value))
	.catch(error => showRejectedMessage(error));

    form.reset();
});
