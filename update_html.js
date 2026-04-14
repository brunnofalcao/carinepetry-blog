// Script para adicionar ao HTML - funcionalidades de copiar e download

function copiarTexto(elementId) {
    const elemento = document.getElementById(elementId);
    const texto = elemento.textContent || elemento.innerText;
    
    navigator.clipboard.writeText(texto).then(() => {
        // Feedback visual
        const botao = event.target;
        const textoOriginal = botao.innerHTML;
        botao.innerHTML = '✅ Copiado!';
        botao.style.background = '#22c55e';
        
        setTimeout(() => {
            botao.innerHTML = textoOriginal;
            botao.style.background = '';
        }, 2000);
    });
}

function baixarImagem(nomeArquivo) {
    const link = document.createElement('a');
    link.href = nomeArquivo;
    link.download = nomeArquivo;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
