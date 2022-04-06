// Download Versione Originale
function download() {
    window.open("https://masos.my.to/vita-afghanistan/download");
    var messaggioDownload = "Grazie per aver scaricato la versione originale de 'La Vita in Afghanistan'";
    var nuovoPulsanteDownload = "Scaricalo di nuovo"
    document.getElementById("descrizione").textContent = messaggioDownload;
    document.getElementById("primoPulsante").textContent = nuovoPulsanteDownload;
}
// Cambio schermata -> da homepage a gioco vero e proprio
function launchGame() {
    var pulsanteGioca = "Gioca";
    var pulsanteInformazioni = "Informazioni";
    document.getElementById("secondoPulsante").textContent = pulsanteGioca;
    document.getElementById("secondoPulsante").setAttribute("onclick", "sceltaPersonaggio()");
    document.getElementById("primoPulsante").textContent = pulsanteInformazioni;
    document.getElementById("primoPulsante").setAttribute("onclick", "apriInformazioni()");
}

// Cambio schermata --> da inizio gioco a selezione personaggio
function sceltaPersonaggio() {
    window.location.href='play/Game/select.html';
}

// Cambio schermata --> schermate secondarie
function apri(pagina) {
    if (pagina === "informazioni") {
        window.location.href='play/info.html';
    } else {alert("Errore");
};
}

// Workaround
function apriInformazioni() {
    apri("informazioni")
}