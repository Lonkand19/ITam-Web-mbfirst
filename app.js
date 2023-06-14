let container = document.getElementById('container');
let container2 = document.getElementById('container1');
let container3 = document.getElementById('container2');
let container4 = document.getElementById('container3');

container.addEventListener('click', () => {
    document.querySelector('.text').style.display = 'block';
    container.style.boxShadow = 'inset 0 0 60px whitesmoke, inset 20px 0 80px #f0f, inset -20px 0 80px #0ff, inset 20px 0 300px #f0f, inset -20px 0 300px #0ff, 0 0 50px #fff, -10px 0 80px #f0f, 10px 0 80px #0ff';
    container.style.transform = 'translateY(-100px)';
    container2.style.transform = 'translateY(100px)';
    container3.style.transform = 'translateY(100px)';
    container4.style.transform = 'translateY(100px)';
    container2.style.boxShadow = 'none';
    container3.style.boxShadow = 'none';
    container4.style.boxShadow = 'none';
});


container2.addEventListener('click', () => {
    document.querySelector('.text').style.display = 'none';
    container.style.boxShadow = 'none';
    container2.style.boxShadow = 'inset 0 0 60px whitesmoke, inset 20px 0 80px #f0f, inset -20px 0 80px #0ff, inset 20px 0 300px #f0f, inset -20px 0 300px #0ff, 0 0 50px #fff, -10px 0 80px #f0f, 10px 0 80px #0ff';
    container.style.transform = 'translateY(-100px)';
    container2.style.transform = 'translateY(-100px)';
    container3.style.transform = 'translateY(100px)';
    container4.style.transform = 'translateY(100px)';
    container.style.boxShadow = 'none';
    container3.style.boxShadow = 'none';
    container4.style.boxShadow = 'none';
});

container3.addEventListener('click', () => {
    document.querySelector('.text').style.display = 'none';
    container3.style.boxShadow = 'inset 0 0 60px whitesmoke, inset 20px 0 80px #f0f, inset -20px 0 80px #0ff, inset 20px 0 300px #f0f, inset -20px 0 300px #0ff, 0 0 50px #fff, -10px 0 80px #f0f, 10px 0 80px #0ff';
    container.style.transform = 'translateY(-100px)';
    container2.style.transform = 'translateY(-100px)';
    container3.style.transform = 'translateY(-100px)';
    container4.style.transform = 'translateY(100px)';
    container2.style.boxShadow = 'none';
    container.style.boxShadow = 'none';
    container4.style.boxShadow = 'none';
});
container4.addEventListener('click', () => {
    document.querySelector('.text').style.display = 'none';
    container4.style.boxShadow = 'inset 0 0 60px whitesmoke, inset 20px 0 80px #f0f, inset -20px 0 80px #0ff, inset 20px 0 300px #f0f, inset -20px 0 300px #0ff, 0 0 50px #fff, -10px 0 80px #f0f, 10px 0 80px #0ff';
    container.style.transform = 'translateY(-100px)';
    container2.style.transform = 'translateY(-100px)';
    container3.style.transform = 'translateY(-100px)';
    container4.style.transform = 'translateY(-100px)';
    container2.style.boxShadow = 'none';
    container3.style.boxShadow = 'none';
    container.style.boxShadow = 'none';
});


