// Modifica Pagina
function modificaContenuto(elemento, contenuto) {
    document.getElementById(elemento).innerText = contenuto;
}

// Link ad altre pagine interne
function vai(destinazione) {
    window.location.replace(destinazione);
}

// Download Versione Originale
function download() {
    window.open("https://masos.my.to/vita-afghanistan/download");
    modificaContenuto("descrizione", "Grazie per aver scaricato la versione originale de 'La Vita in Afghanistan'. Se il download non parte cliccare nuovamente su Download.");
    modificaContenuto("primoPulsante", "Download");
}

// Selezione Personaggio
function seleziona(genere) {
    if (genere === "donna") {
        if (confirm("Vuoi Continuare come Donna? \n \n Le scelte ti riguarderanno personalmente, rivendica i tuoi diritti riuscendo a sopravvivere \n \n Livello di difficoltà: Difficile") == true) {
            vai('../play/donna/');
        }
    }   else if (genere === "uomo") {
        if (confirm("Vuoi Continuare come Uomo? \n \n Le scelte riguarderanno il tuo pensiero nei confronti dei diritti delle donne e dei talebani, fai la cosa giusta riuscendo a sopravvivere \n \n Livello di difficoltà: Medio") == true) {
            vai('../play/uomo');
        }
    }
}

// Salva Punteggio
function salvaPunti(puntiPartita) {
    if (localStorage.getItem('punti') == null) {
        localStorage.setItem('punti', 0);
    }
    let punti = localStorage.getItem('punti');
    punti += puntiPartita;
    localStorage.setItem('punti', punti);
}