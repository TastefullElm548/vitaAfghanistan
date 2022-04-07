// Download Versione Originale
function downloadOriginale() {
    window.open("https://masos.my.to/vita-afghanistan/download");
    var messaggioDownload = "Grazie per aver scaricato la versione originale de 'La Vita in Afghanistan'. Se il download non parte cliccare nuovamente su Originale.";
    document.getElementById("descrizione").textContent = messaggioDownload;
}
// Apertura scelta personaggio
function gioca() {
    window.location.href='play/Game/select.html';
}

// Apertura informazioni
function apriInformazioni() {
        window.location.href='play/info.html';
}