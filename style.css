function gerarRelatorio() {
    const area = document.getElementById('captureArea');
    const unidade = document.getElementById('unidade').value || "Geral";

    // Feedback visual ao clicar
    const btn = document.querySelector('.floating-btn');
    btn.innerText = "Processando...";

    html2canvas(area, {
        backgroundColor: "#1a0a2e",
        scale: 2,
        borderRadius: 24
    }).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        
        // Download da imagem
        const link = document.createElement('a');
        link.download = `Checklist_XKMIX_${unidade}.png`;
        link.href = imgData;
        link.click();

        // WhatsApp
        const msg = encodeURIComponent(`🚀 *Checklist XKMIX Finalizado*\nUnidade: ${unidade}\nStatus: Operação Pronta!`);
        
        setTimeout(() => {
            btn.innerText = "Enviar Checklist";
            window.open(`https://wa.me/?text=${msg}`, '_blank');
        }, 1000);
    });
}
