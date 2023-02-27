function load() {
    let modalità = ottieniParametri("mode");
    let risultato = ottieniParametri("risultato");

    if (modalità === "donna" && risultato === "vittoria") {
        modificaContenuto("titolo", "Hai Vinto, ma a che Prezzo!");
        modificaContenuto("descrizione", "<p>Sei riuscita a sopravvivere ad una vita oppressa dai talebani tentando di rivendicare i tuoi diritti! Speriamo che questo sia stato un esempio per le generazioni presenti e future! 🏆</p><br><p>Ricorda:</p><p>Conoscere il problema è importante,</p><p>ma mai quanto le azioni concrete!</p>");
    } else if (modalità === "donna" && risultato === "sconfitta") {
        modificaContenuto("titolo", "Hai Perso");
        modificaContenuto("descrizione", "<p>Non sei riuscita a sopravvivere ad una vita oppressa dai talebani. Speriamo che il tuo esempio possa servire alle generazioni future per realizzare il tuo sogno di uno stato libero in cui i diritti vengono rispettati! 🏆</p><br><p>Ricorda:</p><p>Conoscere il problema è importante,</p><p>mai quanto le azioni concrete!</p>");
    } else if (modalità === "uomo" && risultato === "vittoria") {
        modificaContenuto("titolo", "Hai Vinto!");
        modificaContenuto("descrizione", "<p>Sei riuscito a sopravvivere e far sopravvivere tua moglie ad una vita oppressa dai talebani tentando di rivendicare i diritti tuoi e suoi! Speriamo che questo sia stato un esempio per le generazioni presenti e future! 🏆</p><br><p>Ricorda:</p><p>Conoscere il problema è importante,</p><p>ma mai quanto le azioni concrete!</p>");
    } else if (modalità === "uomo" && risultato === "sconfitta") {
        modificaContenuto("titolo", "Hai Perso");
        modificaContenuto("descrizione", "<p>Non sei riuscito a sopravvivere ad una vita minacciata dai talebani. Speriamo che il tuo esempio possa servire alle generazioni future per realizzare il tuo sogno di uno stato libero in cui i diritti vengono rispettati! 🏆</p><br><p>Ricorda:</p><p>Conoscere il problema è importante,</p><p>mai quanto le azioni concrete!</p>");
    }
}