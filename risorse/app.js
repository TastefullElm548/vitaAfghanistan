// Download Versione Originale
function download(){
    window.open("https://masos.my.to/vita-afghanistan/download");
    var messaggioDownload = "Grazie per aver scaricato la versione originale de 'La Vita in Afghanistan'";
    var nuovoPulsanteDownload = "Scaricalo di nuovo"
    document.getElementById("descrizione").textContent = messaggioDownload;
    document.getElementById("pulsanteDownload").textContent = nuovoPulsanteDownload;
}