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
        console.log('Prezzo minorenni: ' + ticketMinor.toFixed(2));
    }
    // Biglietto Over 65
    else if (ageRange == 'Over 65') {
        let ticketOver65 = (ticketPrice * 40) / 100;
        console.log('Prezzo Over 65: ' + ticketOver65.toFixed(2));
    }
    // Biglietto Standard/Maggiorenni 
    else {
        console.log('Prezzo standard: ' + ticketPrice);
    }
}