var puntiVita = 45;
var question = [0, 1, 2, 3, 4, 5, 6];
    question[1] = "La tua famiglia inizia a pensare al futuro tuo, dei tuoi fratelli e delle tue sorelle. Ti dicono che te e i tuoi fratelli sarete promessi sposi alla ragazza che vorrete, mentre le tue sorelle dovranno accettare le proposte degli altri uomini. Cosa ne pensi?";
    question[2] = "È arrivato il tuo turno. La tua famiglia si offre per aiutare la famiglia delle tue cugine e ti chiede se te ne interessa una. Cosa vuoi rispondere?";
    question[3] = "Vorresti leggere queste leggi, i libri sacri che ti riguardano e scoprire la storia dell'Afghanistan. Cosa fai?";
    question[4] = "Finalmente ti sposi. Tua moglie sembra preoccupata per ciò che le è stato raccontato dopo il matrimonio, ma tu sei diverso! Tu sei migliore! Come passi la prima giornata 'normale' con lei?";
    question[5] = "Decidete di avere dei figli. Come agirete?";
    question[6] = "Ormai sei considerato un 'Anziano'. Sei orgoglioso dei tuoi figli e vuoi lasciare al mondo un lascito di libertà. Ti proponi alle elezioni come ultima buona azione della tua vita! Cosa proponi?";
var counterArrays = 0;
var nBtnVar = "";
var btn1var = [0, "Sarà giusto così", "Mi interessa...", "Credo al sentito dire", "Normalmente", "Li crescerò come sono stato cresciuto io", "Applicazione di leggi più 'libere'"];
var btn2var = [0, "Ne parlo con i miei", "Non mi interessano", "Cerco dei libri tra amici e cugini", "Parlando dei suoi diritti perduti", "Li crescerò raccontandogli piccoli insegnamenti", "Abolizione delle leggi peggiori"];
var btn3var = [0, "Protesto per far si che non siano obbligate", "Dovrei chiedere il loro parere, no?", "Cerco libri in giro per i mercati", "Andando in giro non curanti delle leggi", "Li crescero senza mandarli alle scuole 'talebane'", "Abolizione del dominio talebano e liberazione dell'Afghanistan"];

var a0 = "Conseguenze: \n \nEssere troppo ingenui, a volte, fa accorgere delle cose quando è troppo tardi";
var a1 = "Conseguenze: \n \nSperiamo che ti lascino scegliere al 100%";
var a2 = "Conseguenze: \n \nFamiglia Imparentata: \nOgni tuo desiderio è un ordine per noi";
var a3 = "Conseguenze: \n \nL'ignoranza semplifica la vita, ma non ti porterà mai alla realizzazione e alla felicità vera";
var a4 = "Conseguenze: \n \nNon è mai troppo tardi per il cambiamento! (cit. AWorld)";
var a5 = "Conseguenze: \n \nÈ probabile che seguiranno i tuoi esempi nonostante ciò!";
var a6 = "Conseguenze: \n \nHai concluso la tua vita in modo dignitoso. Sei morto da eroe! I talebani ti vedono come un nemico della patria e cercano di ucciderti, fuggi all'estero verso l'Europa e speri che i tuoi figli, quando non ci sarai più, riporteranno l'Afghanistan al suo antico splendore! Addio Combattente!";

var b0 = "Conseguenze: \n \nTi spiegano la situazione e ti sembrano un po' preoccupati per te";
var b1 = "Conseguenze: \n \nTi spiegano che le donne sono solo oggetti di scambio con le altre famiglie e anche tu ne riceverai una. Ciò non ti sembra giusto";
var b2 = "Conseguenze: \n \nLa tua famiglia: \nVabbé, abbiamo tanti cugini e tanti amici ancora...";
var b3 = "Conseguenze: \n \nGli altri non capiscono questo tuo desiderio e ti scherniscono";
var b4 = "Conseguenze: \n \nLei si sta rilassando perché pensa di poter vivere un futuro migliore!";
var b5 = "Conseguenze: \n \nQuesti sono la parte più importante dell'educazione dei figli. Continua così!";
var b6 = "Conseguenze: \n \nHai concluso la tua vita in modo dignitoso. Sei morto da eroe! I talebani ti vedono come un nemico della patria e cercano di ucciderti, fuggi all'estero verso l'Europa e speri che i tuoi figli, quando non ci sarai più, riporteranno l'Afghanistan al suo antico splendore! Addio Combattente!";

var c0 = "Conseguenze: \n \nTi urlano di non lasciare che pensieri incostituzionali ti entrino in mente e iniziano a guardarti male";
var c1 = "Conseguenze: \n \nI tuoi genitori ti picchiano perché non devi opporti alla legge!";
var c2 = "Conseguenze: \n \nTalebani: \nNon violare le leggi! Criminale! Ti teniamo d'occhio!";
var c3 = "Conseguenze: \n \nI Talebani ti scoprono e ti arrestano. La tua avventura è finita :(";
var c4 = "Conseguenze: \n \nI talebani ti guardano ancora male";
var c5 = "Conseguenze: \n \nI talebani ti scoprono mentre tenti di 'corrompere' i tuoi figli e ti arrestano! La tua avventura finisce qui :(";
var c6 = "Conseguenze: \n \nHai concluso la tua vita in modo dignitoso. Sei morto da eroe! I talebani ti vedono come un nemico della patria e cercano di ucciderti, fuggi all'estero verso l'Europa e speri che i tuoi figli, quando non ci sarai più, riporteranno l'Afghanistan al suo antico splendore! Addio Combattente!";

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
    else if (counterArrays === 3) {
        document.getElementById("btn3").setAttribute('onclick',"next(10, 3)"); //Cambio costo 3^ Azione al costo iniziale
    }
    if (counterArrays === 4) {
        document.getElementById("btn3").setAttribute('onclick',"next(puntiVita, 3)"); //Cambio costo 3^ Azione a tutta la vita
    }
    else if (counterArrays === 5) {
        document.getElementById("btn1").setAttribute('onclick',"next(0, 1)"); //Cambio costo 1^ Azione al costo iniziale
        document.getElementById("btn2").setAttribute('onclick',"next(0, 2)"); //Cambio costo 2^ Azione al costo iniziale
        document.getElementById("btn3").setAttribute('onclick',"next(0, 3)"); //Cambio costo 3^ Azione al costo iniziale
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
