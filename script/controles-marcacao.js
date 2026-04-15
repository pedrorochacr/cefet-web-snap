
function ocultaMarcacacao() {
    const checkbox = document.querySelector('#visibilidade-das-marcacoes');
    const marcacoes = document.querySelectorAll('.marcacao');

    marcacoes.forEach(marcacao => {
        if (checkbox.checked) {
            marcacao.style.visibility = 'hidden';
            marcacao.style.pointerEvents = 'none';
        } else {
            marcacao.style.visibility = '';
            marcacao.style.pointerEvents = '';
        }
    });
}

document.querySelector('#visibilidade-das-marcacoes').addEventListener('change', ocultaMarcacacao);

function atualizaControles(marcacaoEl) {
    document.querySelector('#x-da-marcacao').value = parseInt(marcacaoEl.style.left);
    document.querySelector('#y-da-marcacao').value = parseInt(marcacaoEl.style.top);
    document.querySelector('#largura-da-marcacao').value = parseInt(marcacaoEl.style.width);
    document.querySelector('#altura-da-marcacao').value = parseInt(marcacaoEl.style.height);

    document.querySelector('#titulo-da-marcacao').value = marcacaoEl.dataset.titulo;
    document.querySelector('#conteudo-da-marcacao').value = marcacaoEl.dataset.conteudo;
    document.querySelector('#cor-da-marcacao').value = marcacaoEl.dataset.cor;

    const formato = marcacaoEl.classList.contains('formato-oval') ? 'formato-oval' : 'formato-retangular';
    document.querySelector(`input[value="${formato}"]`).checked = true;
}



marcacoes.forEach(marcacao => {
    marcacao.addEventListener('click', () => {
        document.querySelector('.marcacao.selecionada')?.classList.remove('selecionada');
        marcacao.classList.add('selecionada');
        atualizaControles(marcacao);
    });
});

function atualizaMarcacao() {
    const selecionada = document.querySelector('.marcacao.selecionada');
    if (!selecionada) return;

    selecionada.style.left = document.querySelector('#x-da-marcacao').value + 'px';
    selecionada.style.top = document.querySelector('#y-da-marcacao').value + 'px';
    selecionada.style.width = document.querySelector('#largura-da-marcacao').value + 'px';
    selecionada.style.height = document.querySelector('#altura-da-marcacao').value + 'px';

    selecionada.dataset.titulo = document.querySelector('#titulo-da-marcacao').value;
    selecionada.dataset.conteudo = document.querySelector('#conteudo-da-marcacao').value;
    selecionada.dataset.cor = document.querySelector('#cor-da-marcacao').value;

    const formato = document.querySelector('input[name="formato-da-marcacao"]:checked').value;
    selecionada.classList.remove('formato-oval', 'formato-retangular');
    selecionada.classList.add(formato);
}

const campos = document.querySelectorAll('input:not([type="checkbox"]), textarea');
campos.forEach(campo => campo.addEventListener('input', atualizaMarcacao));
