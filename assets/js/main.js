// Prezzo biglietto al km
const price = 0.21;

function generateTicket(event) {
    event.preventDefault();
    console.log('Il form funziona');

    // Recupero i dati dal form

    // Nome e cognome
    let nameLastname = document.getElementById('name_lastname').value;

    // Km da percorrere
    let distance = document.getElementById('distance').value;

    // Fascia d'età
    let ageRange = document.getElementById('age_range').value;

    // Calcolo il prezzo del biglietto
    let ticketPrice = distance * price;

    // Calcolo il prezzo del biglietto in base alla fascia d'età

    // Biglietto minorenni
    if (ageRange == 'Minorenne') {
        let ticketMinor = (ticketPrice * 20) / 100;
        document.getElementById('ticket_price').innerHTML = `${ticketMinor.toFixed(2)} &euro;`;
        console.log('Prezzo minorenni: ' + ticketMinor.toFixed(2));
    }
    // Biglietto Over 65
    else if (ageRange == 'Over 65') {
        let ticketOver65 = (ticketPrice * 40) / 100;
        document.getElementById('ticket_price').innerHTML = `${ticketOver65.toFixed(2)} &euro;`;
        console.log('Prezzo Over 65: ' + ticketOver65.toFixed(2));
    }
    // Biglietto Standard/Maggiorenni 
    else {
        document.getElementById('ticket_price').innerHTML = `${ticketPrice} &euro;`;
        console.log('Prezzo standard: ' + ticketPrice);
    }

    // Mostro il biglietto

    // Nome e cognome del passeggero
    document.getElementById('user_name').innerHTML = nameLastname;

    // Tipo di offerta/sconto
    document.getElementById('ticket_type').innerHTML = ageRange;

    // Numero della carrozza
    document.getElementById('carriage').innerHTML = Math.floor(Math.random() * 10) + 1;;

    // Codice CP
    document.getElementById("cp_code").innerHTML = Math.floor(Math.random() * 10000) + 90001;

}