console.log("Sistema XKMIX carregado com sucesso!");

function gerarRelatorio() {
    const area = document.getElementById('captureArea');
    const unidade = document.getElementById('unidade').value || "Geral";

    // Mostra um aviso rápido
    console.log("Gerando imagem para o grupo XKMIX...");

    html2canvas(area, {
        backgroundColor: "#1a0a2e",
        scale: 2,
        logging: false,
        useCORS: true
    }).then(canvas => {
        // 1. Transforma em imagem e faz o download
        const imgData = canvas.toDataURL("image/png");
        const link = document.createElement('a');
        link.download = `Checklist_XKMIX_${unidade}.png`;
        link.href = imgData;
        link.click();

        // 2. Avisa o usuário e abre o link do grupo após 1.5 segundos
        // Isso dá tempo do download começar antes de mudar de página
        setTimeout(() => {
            const urlGrupo = "https://chat.whatsapp.com/Gbcor4OIveN5zH9rLNGxyE";
            window.open(urlGrupo, '_blank');
        }, 1500);
    });
}
