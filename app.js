// Modifica Pagina
function modificaContenuto(elemento, contenuto) {
    document.getElementById(elemento).innerHTML = contenuto;
}

// Link ad altre pagine interne
function vai(destinazione) {
    window.location.assign(destinazione);
}

// Download Versione Originale
function download() {
    window.open("https://masos.my.to/vita-afghanistan/download");
    modificaContenuto("descrizione", "Grazie per aver scaricato la versione originale de 'La Vita in Afghanistan'. Se il download non parte cliccare nuovamente su Download.");
    modificaContenuto("primoPulsante", "Download");
}

// Cambia Visualizzazione tra Informazioni e Fonti
function cambiaVisualizzazione() {
    if (document.getElementById("titolo").innerText === "Informazioni") {
        const Fonti = '<a href="https://gazzetta.it/Sport-Vari/storie/03-11-2021/afghanistan-talebani-dicono-si-buzkashi-4202205681648/">La Gazzetta dello Sport</a><br><a href="https://actionaid.it/informati/notizie/come-vivono-donne-afghanistan-testimonianze">Actionaid</a><br><a href="https://wikipedia.org/">Wikipedia/Wikimedia (Pagine Multiple)</a><br><a href="https://ilsole24ore.com/art/afghanistan-tutti-diritti-negati-donne-AEDgIhh">Il Sole 24 Ore</a>';
        modificaContenuto("titolo", "Fonti");
        modificaContenuto("descrizione", Fonti);
        modificaContenuto("secondoPulsante", "Informazioni")
    } else if (document.getElementById("titolo").innerText === "Fonti") {
        const Informazioni = '<h4>Come Giocare:</h4><p>Premere un\'azione per scegliere il proprio futuro</p><h4>Modalità di Gioco:</h4><p><b>Donna:</b> le scelte contro i talebani e la Sharia fanno perdere punti vita. Se si arriva a 0 si perde.</p><p><b>Uomo:</b> le scelte contro i talebani e la Sharia riducono la propria reputazione. Se si raggiunge 0 si viene arrestati e si perde.</p><h4>Si inizia con 45 punti vita (<a href="https://web.archive.org/web/20220101131400/https://it.wikipedia.org/wiki/Afghanistan#Istituzione_della_AUAF" target="_blank">Perché 45?</a>)</h4>';
        modificaContenuto("titolo", "Informazioni");
        modificaContenuto("descrizione", Informazioni);
        modificaContenuto("secondoPulsante", "Fonti")
    }
}

// Parametri Url
function ottieniParametri(parametro) {
    indirizzo = window.location.search;
    valore = new URLSearchParams(indirizzo).get(parametro);
    return valore;
}

// Selezione Personaggio
function seleziona(genere) {
    if (genere === "donna") {
        if (confirm("Vuoi Continuare come Donna? \n \n Le scelte ti riguarderanno personalmente, rivendica i tuoi diritti riuscendo a sopravvivere \n \n Livello di difficoltà: Difficile") == true) {
            vai('../?mode=donna');
        }
    }   else if (genere === "uomo") {
        if (confirm("Vuoi Continuare come Uomo? \n \n Le scelte riguarderanno il tuo pensiero nei confronti dei diritti delle donne e dei talebani, fai la cosa giusta riuscendo a sopravvivere \n \n Livello di difficoltà: Medio") == true) {
            vai('../?mode=uomo');
        }
    }
}