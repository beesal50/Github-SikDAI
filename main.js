const texts = ["1. GitHub", "2. Facebook", "3. Google", "4. Youtube"];

// Variables
const left = document.querySelector(".leftarrow");
const right = document.querySelector(".rightarrow");
const text = document.querySelector("h1");

// Getting last word
const lastWord = texts.length - 1;
console.log(lastWord);

let i = 0;
text.innerHTML = texts[0];

// Function
function next(){
    i++;
    if (i > lastWord){
        i = 0;
    }
    text.innerHTML = texts[i];
}

function back(){
    i--;
    if (i < 0){
        i = lastWord;
    }
    text.innerHTML = texts[i];
}

// CallBack function
right.addEventListener('click',next);
left.addEventListener('click',back);
