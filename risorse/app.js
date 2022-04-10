// Modifica Pagina
function modificaContenuto(elemento, contenuto) {
    document.getElementById(elemento).innerText = contenuto;
}

// Link ad altre pagine interne
function vai(destinazione) {
    window.location.replace(destinazione);
}

// Download Versione Originale
function downloadOriginale() {
    window.open("https://masos.my.to/vita-afghanistan/download");
    modificaContenuto("descrizione", "Grazie per aver scaricato la versione originale de 'La Vita in Afghanistan'. Se il download non parte cliccare nuovamente su Originale.")
}