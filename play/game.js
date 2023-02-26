let numeroDomanda = 0;
let punteggio = 45;
let data;

async function getUomoData() {
    const res = await fetch('risorse/uomo.json');
    data = await res.json();
    return data;
}

async function getDonnaData() {
    const res = await fetch('risorse/donna.json');
    data = await res.json();
    return data;
}


async function load() {
    if (ottieniParametri("mode") === "donna") {
        data = await getDonnaData();
        nuovaDomanda(0, data);
    } else if (ottieniParametri("mode") === "uomo") {
        data = await getUomoData();
        nuovaDomanda(0, data);
    } else {
        vai("select")
    }
}

function avanti(pulsante) {
    aggiornaPunteggio(pulsante, data);
    numeroDomanda += 1;
    nuovaDomanda(numeroDomanda, data);
}

function fine(risultato, mode) {
    destinazione = "fine?risultato=" + risultato + "&mode=" + mode;
    vai(destinazione);
}

function aggiornaPunteggio(pulsante, data) {
    if (pulsante === 1) {
        alert(data.conseguenzePulsante1[numeroDomanda]);
        punteggioDaPerdere = data.puntiPulsante1[numeroDomanda];
    } else if (pulsante === 2) {
        alert(data.conseguenzePulsante2[numeroDomanda]);
        punteggioDaPerdere = data.puntiPulsante2[numeroDomanda];
    } else if (pulsante === 3) {
        alert(data.conseguenzePulsante3[numeroDomanda]);
        punteggioDaPerdere = data.puntiPulsante3[numeroDomanda];
    }
    punteggio = punteggio - punteggioDaPerdere;
    modificaContenuto("punteggio", punteggio);
    if (punteggio <= 0) {
        fine("sconfitta", ottieniParametri("mode"));
    }
}

function nuovaDomanda(numeroDomanda, data) {
    if (numeroDomanda > 6) {
        fine("vittoria", ottieniParametri("mode"));
        return
    }
    modificaContenuto("domanda", data.domande[numeroDomanda]);
    modificaContenuto("pulsante1", data.testoPulsante1[numeroDomanda]);
    modificaContenuto("pulsante2", data.testoPulsante2[numeroDomanda]);
    modificaContenuto("pulsante3", data.testoPulsante3[numeroDomanda]);
}