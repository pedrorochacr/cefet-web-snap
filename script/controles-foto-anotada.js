
document.querySelector('#filtro-da-foto').addEventListener('input', (evento) => {
    document.querySelector('.foto-anotada > img').style.filter = evento.target.value;
});
