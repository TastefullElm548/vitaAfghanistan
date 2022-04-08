var puntiVita = 45;
var question = [0, 1, 2, 3, 4, 5, 6];
    question[1] = "È ora! Hai superato 10 anni di vita! Sei abbastanza grande per iniziare ad indossare il velo ogni volta che esci di casa. Ti velerai?";
    question[2] = "I tuoi genitori e i tuoi fratelli non apprezzano molto lo sport nazionale, il buzkashi (vedi masos.my.to/vita-afghanistan/buzkashi), e anche i talebani erano d'accordo con loro, una volta. Ora anche alcuni loro comandanti ci giocano! Ma torniamo a te e alla tua famiglia. Apprezzate molto di più il calcio, e tu, molto curiosa, ci giochi con i tuoi fratelli, in casa, e dimostri che loro non sono così più forti di te! Vuoi coltivare questa passione?";
    question[3] = "Progressivamente hai visto sparire tutte le donne dalle serie tv, le uniche rimaste sono al telegiornale. Le donne vengono 'censurate' in tutto. A te non piace questa direzione, come intendi reagire?";
    question[4] = "Hai visto delle donne protestare in strada per i propri diritti e venir sparate. Ora le donne che protestano per strada sono conserviste ed estremiste e vogliono annullare tutte le libertà che avete raggiunto. Come vuoi procedere?";
    question[5] = "Nel frattempo, dopo numerosi litigi con i fratelli, non si sa se per sposarti o no, il tuo cugino coetaneo è finalmente pronto per ufficializzare il matrimonio. Questo non ti piace e non vuoi continuare. Come reagisci?";
    question[6] = "Ti sei sposata! Congratulazioni 🎉, o forse non era quello che volevi. Fatto sta che il tuo nuovo marito è abbastanza intransigente riguardo alle leggi talebane e ogni tanto, specialmente quando è arrabbiato o ha parlato con dei suoi amici, ti considera meno di un oggetto. Cosa vuoi fare?";
var counterArrays = 0;
var nBtnVar = "";
var btn1var = [0, "Si/Mi piace", "No, non mi piace molto", "Non mi da fastidio", "Le loro opinioni hanno senso, le seguirò!", "Potrebbe non essere così male", "Subirò, se non è così violento."];
var btn2var = [0, "Quando obbligata", "Si, ma in privato a casa", "Ne parlo con famiglia e conoscenti", "Mi lamenterò con tutti quelli con cui parlo", "Ne parlerò con i miei genitori", "Ne discuterò con lui"];
var btn3var = [0, "No, mai!!!", "Si, agonisticamente", "Scendo in strada a protestare", "Urlerò contro di loro durante le loro proteste!", "Mi rifiuterò ad ogni costo", "Mi ribellerò!"];

var a0 = "Conseguenze: \n \nRinunciando all'istruzione stai accettando che le donne possano studiare SE E SOLO SE lo stato, economicamente e logisticamente, ha possibilità di permettere l'istruzione femminile. Essendo che sei a casa, ciò non è stato possibile.";
var a1 = "Conseguenze: \n \nSe è una tua scelta puoi dire che per la prima volta una legge talebana non è un impedimento per te e le tue libertà!";
var a2 = "Conseguenze: \n \nLe tue scelte sono ordini, potrai concentrarti su altri hobbies (sempre se 'consentiti alle donne', anche se ai talebani non va bene nulla";
var a3 = "Conseguenze: \n \nPeccato. Più si è meglio è. Il tuo aiuto sarebbe potuto essere utile a dare coraggio ad altre donne per andare tutte in piazza a rivendicare i vostri diritti";
var a4 = "Conseguenze: \n \nNon lasciare che chiunque possa farti cambiare idea. Ottieni una tua opinione basata su quelle degli altri e sul tuo istinto!";
var a5 = "Conseguenze: \n \nCelebrate il matrimonio. Sei felice ora...?";
var a6 = "Conseguenze: \n \n'Felice' matrimonio 😓";

var b0 = "Conseguenze: \n \nI tuoi genitori sono buoni e vogliono spiegarti la situazione. Sei fortunata e vivi a Kabul, la tua famiglia non è né estremista né in estrema povertà, ma questo è ciò che ti è stato imposto dall'ingiusto regime talebano. La cosa ti ferisce (-2❤️) ma pensi che il futuro ti ripagherà per questa rinuncia.";
var b1 = "Conseguenze: \n \nA parte i rimproveri dei tuoi genitori in occasioni ad alto rischio di essere scoperti ti salvi dalla violenza dei talebani (-2❤️)";
var b2 = "Conseguenze: \n \nMentre ci giocavi con i tuoi fratelli, un vicino 'sbircia a casa tua' e dopo un severo sguardo di disprezzo e disapprovazione se ne va, facendoti prendere un colpo (-2❤️). Per fortuna non è un talebano vero e proprio e non denuncia te e la tua famiglia";
var b3 = "Conseguenze: \n \nTutti ti tarpano le ali, ciò ti fa sentire molto sola. Avresti preferito scendere in piazza; ma non è mai troppo tardi! 😉";
var b4 = "Conseguenze: \n \nQualcuno da loro ragione, qualcuno è d'accordo con te. Questa rabbia che porti dentro ferisce (-2❤️)";
var b5 = "Conseguenze: \n \nLoro non ti avrebbero obbligata a sposarti se non fosse stato per mantenere la tua famiglia e i tuoi fratelli (e le tue sorelle prima del matrimonio). Ti rassegni al matrimonio, per il bene della famiglia... (-2❤️)";
var b6 = "Conseguenze: \n \nTi mena, ma più a parole che a fatti. Forse non è poi così cattivo (-2❤️)";

var c0 = "Conseguenze: \n \nSei ancora una bambina e i talebani un cuore ancora ce l'hanno, ma solo per fare ciò che gli fa comodo, e quindi non ti toccano neanche, anzi, ti 'offrono' un 'passaggio' a casa. Quando arrivate a casa però se la prendono con i tuoi genitori picchiandoli e, per quanto loro non ti restituiscano il favore, ciò ti fa star male (-10❤️)";
var c1 = "Conseguenze: \n \nI talebani non transigono, 'non puoi metterti in mostra'! (-10❤️)";
var c2 = "Conseguenze: \n \nProvi ad avvicinarti a chi di mestiere, ma i talebani si sono radicati anche nello sport e, nonostante la possibilità di giocare 'non in pubblico e lontano dai media' i talebani sostengono che è troppo pericoloso 'rischiare di mostrarti in pubblico, specialmente se non velata'. Ovviamente come punizioni i talebani saltano le sgridate e vanno alle mani (-10❤️)";
var c3 = "Conseguenze: \n \nSarà sfortuna, ma i talebani decidono di sparare sulla folla. Finisce qui la tua avventura.";
var c4 = "Conseguenze: \n \nI talebani si arrabbiano perché sei una donna e non devi urlare. Ti sparano a vista. Finisce qui la tua avventura :(";
var c5 = "Conseguenze: \n \nPer non essere costretta a subire il matrimonio decidi di ricorrere al suicidio. La tua avventura finisce qui :(";
var c6 = "Conseguenze: \n \nSarà per cattiveria, o per la pressione della società, ma non esita un momento a picchiarti a morte. La tua avventura finisce qui :(";

var spiegazione1 = [a0, a1, a2, a3, a4, a5, a6];
var spiegazione2 = [b0, b1, b2, b3, b4, b5, b6];
var spiegazione3 = [c0, c1, c2, c3, c4, c5, c6];


function explain() {
    if (nBtnVar === 1) {
        alert(spiegazione1[counterArrays]);
    }
    else if (nBtnVar === 2) {
        alert(spiegazione2[counterArrays]);
    }
    else if (nBtnVar === 3) {
        alert(spiegazione3[counterArrays]);
    }
}
function nextQuestion() {
    counterArrays = counterArrays + 1;
    document.getElementById("domanda").textContent = question[counterArrays]
    document.getElementById("btn1").textContent = btn1var[counterArrays]
    document.getElementById("btn2").textContent = btn2var[counterArrays]
    document.getElementById("btn3").textContent = btn3var[counterArrays]
}

function indietro() {
    window.history.go(-2)
}

function fineGiocoVinto() {
    window.location.replace('vittoria.html');
}
function fineGiocoPerso() {
    window.location.replace('sconfitta.html');
}

function vittoria() {
    document.getElementById("titolo").textContent = "Hai Vinto!";
    // If inutilizzato --> Trasferito in fineGiocoVinto()
    if (puntiVita >= 50) {
        document.getElementById("domanda").textContent = "Sei riuscita a sopravvivere ad una vita oppressa dai talebani! 🏆";
    }
    else if (puntiVita <= 45) {
        document.getElementById("domanda").textContent = "Sei sopravvissuta per un pelo. Speriamo che il tuo esempio serva a formare una società migliore un domani! ⭐";
    }
    setTimeout(fineGiocoVinto(), 5000);
}

function next(danno, nBtn) {
    puntiVita = puntiVita - danno;
    document.getElementById("counter").textContent = puntiVita;
    nBtnVar = nBtn
    if (counterArrays === 2) {
        document.getElementById("btn3").setAttribute('onclick',"next(puntiVita, 3)"); //Cambio costo 3^ Azione a tutta la vita
    }
    else if (counterArrays === 3000) {
        document.getElementById("btn3").setAttribute('onclick',"next(10, 3)"); //Cambio costo 3^ Azione al costo iniziale (non usato)
    }
    explain();
    if (puntiVita <= 0) {
        fineGiocoPerso();
    } 

    if (counterArrays === 6) {
        vittoria();
    }
    else {
        nextQuestion();
    }
}
