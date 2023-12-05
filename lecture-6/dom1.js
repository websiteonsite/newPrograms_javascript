const btn = document.createElement('button');
btn.textContent = 'Click here';
btn.className = 'btn1';

const division = document.querySelector("div");
division.appendChild(btn);

//removing heading on the click of a btn
btn.addEventListener('click', () =>
    document.querySelector('h2').remove()
);

//Event Listener on Para
const p = document.querySelector('p');
p.addEventListener('click', function () {
    clickPara('Hello');
});

function clickPara(name){
    console.log(name + ' Para Clicked');
}

//document.querySelector('h2').remove();