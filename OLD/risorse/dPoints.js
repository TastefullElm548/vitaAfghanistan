var question = [0, 1, 2, 3, 4, 5, 6];
    question[1] = "È ora! Hai superato 10 anni di vita! Sei abbastanza grande per iniziare ad indossare il velo ogni volta che esci di casa. Ti velerai?";
    question[2] = "I tuoi genitori e i tuoi fratelli non apprezzano molto lo sport nazionale, il buzkashi (vedi masos.my.to/vita-afghanistan/buzkashi), e anche i talebani erano d'accordo con loro, una volta. Ora anche alcuni loro comandanti ci giocano! Ma torniamo a te e alla tua famiglia. Apprezzate molto di più il calcio, e tu, molto curiosa, ci giochi con i tuoi fratelli, in casa, e dimostri che loro non sono così più forti di te! Vuoi coltivare questa passione?";
    question[3] = "Progressivamente hai visto sparire tutte le donne dalle serie tv, le uniche rimaste sono al telegiornale. Le donne vengono 'censurate' in tutto. A te non piace questa direzione, come intendi reagire?";
    question[4] = "Hai visto delle donne protestare in strada per i propri diritti e venir sparate. Ora le donne che protestano per strada sono conserviste ed estremiste e vogliono annullare tutte le libertà che avete raggiunto. Come vuoi procedere?";
    question[5] = "Nel frattempo, dopo numerosi litigi con i fratelli, non si sa se per sposarti o no, il tuo cugino coetaneo è finalmente pronto per ufficializzare il matrimonio. Questo non ti piace e non vuoi continuare. Come reagisci?";
    question[6] = "Ti sei sposata! Congratulazioni 🎉, o forse non era quello che volevi. Fatto sta che il tuo nuovo marito è abbastanza intransigente riguardo alle leggi talebane e ogni tanto, specialmente quando è arrabbiato o ha parlato con dei suoi amici, ti considera meno di un oggetto. Cosa vuoi fare?";
var counterArrays = 0;
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

/*
function next(danno, nBtn) {
    puntiVita = puntiVita - danno;
    document.getElementById("counter").textContent = puntiVita;
    nBtnVar = nBtn
    if (counterArrays === 2) {
        document.getElementById("btn3").setAttribute('onclick',"next(puntiVita, 3)"); //Cambio costo 3^ Azione a tutta la vita
    }
}
*/