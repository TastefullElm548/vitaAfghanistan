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
    window.location.href='play/Game/select.html';
}

// Apertura informazioni
function apriInformazioni() {
    modificaContenuto("descrizione", "Come Giocare: \nPremere un'azione per scegliere il proprio futuro \nModalità di Gioco: \nModalità Donna: le scelte contro i talebani e la Sharia fanno perdere punti vita. Se si arriva a 0 si perde. Si inizia con 45 punti vita \nModalità Uomo: le scelte contro i talebani e la Sharia riducono il livello di fiducia nei nostri confronti. Se si raggiunge 0 si viene arrestati e si perde.");
    document.getElementById("primoPulsante").classList.add("pulsantePrincipale")
    document.getElementById("terzoPulsante").classList.remove("pulsantePrincipale")
    modificaContenuto("primoPulsante", "Indietro");
    modificaContenuto("secondoPulsante", "Fonti");
    modificaContenuto("terzoPulsante", "Crediti");
    document.getElementById("primoPulsante").setAttribute("onclick", "indietro()");
    document.getElementById("secondoPulsante").setAttribute("onclick", "apriFonti()");
    document.getElementById("terzoPulsante").setAttribute("onclick", "apriCrediti()");
    var aCapo = document.createElement("br");
    document.getElementById("descrizione").appendChild(aCapo);
    var linkInformazioni = document.createElement("a");
    var contenutoLinkInformazioni = document.createTextNode("Perché 45?");
    linkInformazioni.appendChild(contenutoLinkInformazioni);
    document.getElementById("descrizione").appendChild(linkInformazioni);
    linkInformazioni.href = "https://oceanhero.today/it/web?q=Vita+media+Afghanistan";
    linkInformazioni.target = "_blank";
}

// Tornare indietro
function indietro() {
    window.location.reload(false);
}

// Aprire fonti
function apriFonti() {
    window.location.href='play/fonti.html'
}

// Aprire crediti
function apriCrediti() {
    window.location.href='play/crediti.html'
}