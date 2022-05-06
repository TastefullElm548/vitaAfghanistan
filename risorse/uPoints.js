let puntiVita = 45;

const domande = ["Sei nato in Afghanistan e, da allora, ti è stato insegnato che sei più importante delle tue sorelle, che dovrai lavorare e che il loro scopo è solo quello di fare figli per continuare un'altra famiglia. Ti stai facendo qualche domanda?",
               "La tua famiglia inizia a pensare al futuro tuo, dei tuoi fratelli e delle tue sorelle. Ti dicono che te e i tuoi fratelli sarete promessi sposi alla ragazza che vorrete, mentre le tue sorelle dovranno accettare le proposte degli altri uomini. Cosa ne pensi?",
               "È arrivato il tuo turno. La tua famiglia si offre per aiutare la famiglia delle tue cugine e ti chiede se te ne interessa una. Cosa vuoi rispondere?",
               "Vorresti leggere queste leggi, i libri sacri che ti riguardano e scoprire la storia dell'Afghanistan. Cosa fai?",
               "Finalmente ti sposi. Tua moglie sembra preoccupata per ciò che le è stato raccontato dopo il matrimonio, ma tu sei diverso! Tu sei migliore! Come passi la prima giornata 'normale' con lei?",
               "Decidete di avere dei figli. Come agirete?",
               "Ormai sei considerato un 'Anziano'. Sei orgoglioso dei tuoi figli e vuoi lasciare al mondo un lascito di libertà. Ti proponi alle elezioni come ultima buona azione della tua vita! Cosa proponi?"];

const testoPulsante1 = ["No", "Sarà giusto così", "Mi interessa...", "Credo al sentito dire", "Normalmente", "Li crescerò come sono stato cresciuto io", "Applicazione di leggi più \"libere\""];
const testoPulsante2 = ["Si, ne parlerò con i miei genitori", "Ne parlo con i miei", "Non mi interessano", "Cerco dei libri tra amici e cugini", "Parlando dei suoi diritti perduti", "Li crescerò raccontandogli piccoli insegnamenti", "Abolizione delle leggi peggiori"];
const testoPulsante3 = ["Si, ne parlerò a scuola", "Protesto per far si che non siano obbligate", "Dovrei chiedere il loro parere, no?", "Cerco libri in giro per i mercati", "Andando in giro non curanti delle leggi", "Li crescero senza mandarli alle scuole \"talebane\"", "Abolizione del dominio talebano e liberazione dell'Afghanistan"];

const conseguenzePulsante1 = ["Conseguenze: \n \nEssere troppo ingenui, a volte, fa accorgere delle cose quando è troppo tardi", "Conseguenze: \n \nSperiamo che ti lascino scegliere al 100%", "Conseguenze: \n \nFamiglia Imparentata: \nOgni tuo desiderio è un ordine per noi", "Conseguenze: \n \nL'ignoranza semplifica la vita, ma non ti porterà mai alla realizzazione e alla felicità vera", "Conseguenze: \n \nNon è mai troppo tardi per il cambiamento! (cit. AWorld)", "Conseguenze: \n \nÈ probabile che seguiranno i tuoi esempi nonostante ciò!", "Conseguenze: \n \nHai concluso la tua vita in modo dignitoso. Sei morto da eroe! I talebani ti vedono come un nemico della patria e cercano di ucciderti, fuggi all'estero verso l'Europa e speri che i tuoi figli, quando non ci sarai più, riporteranno l'Afghanistan al suo antico splendore! Addio Combattente!"];
const conseguenzePulsante2 = ["Conseguenze: \n \nTi spiegano la situazione e ti sembrano un po' preoccupati per te", "Conseguenze: \n \nTi spiegano che le donne sono solo oggetti di scambio con le altre famiglie e anche tu ne riceverai una. Ciò non ti sembra giusto", "Conseguenze: \n \nLa tua famiglia: \nVabbé, abbiamo tanti cugini e tanti amici ancora...", "Conseguenze: \n \nGli altri non capiscono questo tuo desiderio e ti scherniscono", "Conseguenze: \n \nLei si sta rilassando perché pensa di poter vivere un futuro migliore!", "Conseguenze: \n \nQuesti sono la parte più importante dell'educazione dei figli. Continua così!", "Conseguenze: \n \nHai concluso la tua vita in modo dignitoso. Sei morto da eroe! I talebani ti vedono come un nemico della patria e cercano di ucciderti, fuggi all'estero verso l'Europa e speri che i tuoi figli, quando non ci sarai più, riporteranno l'Afghanistan al suo antico splendore! Addio Combattente!"];
const conseguenzePulsante3 = [];

function cambiaConseguenze(numeroPulsante, reputazioneDaPerdere) {
    document.getElementById("numeroPulsante").setAttribute('onclick',"avanti('numeroPulsante', reputazioneDaPerdere)");
}

function apriSpiegazione(numeroPulsante, numeroDomanda) {
    if (numeroPulsante === 1) {
        alert(conseguenzePulsante1[numeroDomanda]);
    } else if (numeroPulsante === 2) {
        alert(conseguenzePulsante2[numeroDomanda]);
    } else if (numeroPulsante === 3) {
        alert(conseguenzePulsante3[numeroDomanda]);
    }
}
// Miglioro Variabili e Sistemo Funzioni sotto questa linea

var counterArrays = 0;
var nBtnVar = "";

var c0 = "Conseguenze: \n \nTi urlano di non lasciare che pensieri incostituzionali ti entrino in mente e iniziano a guardarti male";
var c1 = "Conseguenze: \n \nI tuoi genitori ti picchiano perché non devi opporti alla legge!";
var c2 = "Conseguenze: \n \nTalebani: \nNon violare le leggi! Criminale! Ti teniamo d'occhio!";
var c3 = "Conseguenze: \n \nI Talebani ti scoprono e ti arrestano. La tua avventura è finita :(";
var c4 = "Conseguenze: \n \nI talebani ti guardano ancora male";
var c5 = "Conseguenze: \n \nI talebani ti scoprono mentre tenti di 'corrompere' i tuoi figli e ti arrestano! La tua avventura finisce qui :(";
var c6 = "Conseguenze: \n \nHai concluso la tua vita in modo dignitoso. Sei morto da eroe! I talebani ti vedono come un nemico della patria e cercano di ucciderti, fuggi all'estero verso l'Europa e speri che i tuoi figli, quando non ci sarai più, riporteranno l'Afghanistan al suo antico splendore! Addio Combattente!";

function nextQuestion() {
    counterArrays = counterArrays + 1;
    document.getElementById("domanda").textContent = domande[counterArrays]
    document.getElementById("btn1").textContent = testoPulsante1[counterArrays]
    document.getElementById("btn2").textContent = testoPulsante2[counterArrays]
    document.getElementById("btn3").textContent = testoPulsante3[counterArrays]
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

function next(numeroPulsante, reputazionePersa) {
    puntiVita = puntiVita - danno;
    document.getElementById("counter").textContent = puntiVita;
    nBtnVar = nBtn
    if (counterArrays === 2) {
        document.getElementById("btn3").setAttribute('onclick',"next(3, puntiVita)"); //Cambio costo 3^ Azione a tutta la vita
    }
    else if (counterArrays === 3) {
        document.getElementById("btn3").setAttribute('onclick',"next(3, 10)"); //Cambio costo 3^ Azione al costo iniziale
    }
    if (counterArrays === 4) {
        document.getElementById("btn3").setAttribute('onclick',"next(3, puntiVita)"); //Cambio costo 3^ Azione a tutta la vita
    }
    else if (counterArrays === 5) {
        document.getElementById("btn1").setAttribute('onclick',"next(1, 0)"); //Cambio costo 1^ Azione al costo iniziale
        document.getElementById("btn2").setAttribute('onclick',"next(2, 0)"); //Cambio costo 2^ Azione al costo iniziale
        document.getElementById("btn3").setAttribute('onclick',"next(3, 0)"); //Cambio costo 3^ Azione al costo iniziale
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
