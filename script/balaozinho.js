
const balaozinho = document.querySelector('#balaozinho');
const marcacoes = document.querySelectorAll('.marcacao');

marcacoes.forEach(marcacao => {
    marcacao.addEventListener('mouseenter', () => {
        balaozinho.innerHTML = `<h2>${marcacao.dataset.titulo}</h2><p>${marcacao.dataset.conteudo}</p>`;
        balaozinho.style.display = 'block';
    });

    marcacao.addEventListener('mouseleave', () => {
        balaozinho.style.display = 'none';
    });
});
