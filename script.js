console.log("Sistema XKMIX carregado com sucesso!");

function gerarRelatorio() {
    const area = document.getElementById('captureArea');
    const unidade = document.getElementById('unidade').value || "Geral";

    // Impede que o botão saia na foto
    html2canvas(area, {
        backgroundColor: "#1a0a2e",
        scale: 2
    }).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        
        // Download
        const link = document.createElement('a');
        link.download = `Checklist_XKMIX_${unidade}.png`;
        link.href = imgData;
        link.click();

        // WhatsApp
        const msg = encodeURIComponent(`🚀 *Checklist XKMIX Finalizado*\nUnidade: ${unidade}\nStatus: Operação Pronta! ✅`);
        window.open(`https://wa.me/?text=${msg}`, '_blank');
    });
}
