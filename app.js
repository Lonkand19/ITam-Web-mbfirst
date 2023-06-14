let container = document.getElementById('container');
let container2 = document.getElementById('container1');
let container3 = document.getElementById('container2');
let container4 = document.getElementById('container3');

container.addEventListener('click', () => {
    document.querySelector('.text').style.display = 'block';
    container.style.transform = 'translateY(-100px)';
    container2.style.transform = 'translateY(100px)';
    container3.style.transform = 'translateY(100px)';
    container4.style.transform = 'translateY(100px)';
});


container2.addEventListener('click', () => {
    document.querySelector('.text').style.display = 'none';
    container.style.transform = 'translateY(-100px)';
    container2.style.transform = 'translateY(-100px)';
    container3.style.transform = 'translateY(100px)';
    container4.style.transform = 'translateY(100px)';
});

container3.addEventListener('click', () => {
    document.querySelector('.text').style.display = 'none';
    container.style.transform = 'translateY(-100px)';
    container2.style.transform = 'translateY(-100px)';
    container3.style.transform = 'translateY(-100px)';
    container4.style.transform = 'translateY(100px)';
});
container4.addEventListener('click', () => {
    document.querySelector('.text').style.display = 'none';
    container.style.transform = 'translateY(-100px)';
    container2.style.transform = 'translateY(-100px)';
    container3.style.transform = 'translateY(-100px)';
    container4.style.transform = 'translateY(-100px)';
});


