const botaoLerMais = document.getElementById('botao-ler-mais')
const textoCurto = document.getElementById('texto-curto')
const texto = document.getElementById('texto')

function toggleTexto() {
    const lerMaisEstaAtivado = textoCurto.classList.contains('resumo')

    textoCurto.classList.toggle('resumo')
    texto.classList.toggle('completo')
}

botaoLerMais.addEventListener('click', toggleTexto)
