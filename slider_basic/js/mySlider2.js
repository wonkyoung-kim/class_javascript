let frame = document.querySelector('#slider');
let btns = frame.querySelectorAll('.btns li');
let panel = frame.querySelector('.panel');
let link = frame.querySelectorAll('a');
let circle = document.querySelector('#circle');

// console.log(link)
for(let i=0; i<btns.length; i++) {
    btns[i].addEventListener('click', function(e){
        e.preventDefault();

        let isOn = link[i].classList.contains('on');
        if(isOn) return;

        activition(i);
    });
}

function activition(index){
    panel.style.marginLeft = (-100 * index)+'%';
    link.forEach(btn => btn.classList.remove('on'));
    link[index].classList.add('on');

    rotation(index);
}

function rotation(idx){
    for(let j=0; j<btns.length; j++) {
        circle.classList.remove('rot'+(j+1));
    }
    circle.classList.add('rot'+(idx+1));
}