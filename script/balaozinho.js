
const balaozinho = document.querySelector('#balaozinho');
const marcacoes = document.querySelectorAll('.marcacao');

marcacoes.forEach(marcacao => {
    marcacao.addEventListener('mouseenter', () => {
        balaozinho.innerHTML = `<h2>${marcacao.dataset.titulo}</h2><p>${marcacao.dataset.conteudo}</p>`;
        balaozinho.style.color = marcacao.dataset.cor;
        balaozinho.style.display = 'block';
    });

    marcacao.addEventListener('mousemove', (evento) => {
        balaozinho.style.left = evento.pageX + 'px';
        balaozinho.style.top = evento.pageY + 'px';
    });

    marcacao.addEventListener('mouseleave', () => {
        balaozinho.style.display = 'none';
    });
});
