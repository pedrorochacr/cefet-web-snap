
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