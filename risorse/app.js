// Modifica Pagina
function modificaContenuto(elemento, contenuto) {
    document.getElementById(elemento).innerText = contenuto;
}

// Download Versione Originale
function downloadOriginale() {
    window.open("https://masos.my.to/vita-afghanistan/download");
    modificaContenuto("descrizione", "Grazie per aver scaricato la versione originale de 'La Vita in Afghanistan'. Se il download non parte cliccare nuovamente su Originale.")
}
// Apertura scelta personaggio
function gioca() {
    window.location.href='play';
}

// Apertura informazioni
function apriInformazioni() {
    window.location.href='about';
}

// Tornare indietro
function indietro(destinazione) {
    window.location.href=destinazione;
}

// Aprire fonti
function apriFonti() {
    window.location.href='../GiocoLegacy/fonti.html'
}

// Aprire crediti
function apriCrediti() {
    window.location.href='../GiocoLegacy/crediti.html'
}