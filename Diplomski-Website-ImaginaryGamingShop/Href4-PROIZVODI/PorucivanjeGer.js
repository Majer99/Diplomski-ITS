function validateForm() {
    var imePrezime = document.getElementById("imePrezime").value;
    var email = document.getElementById("email").value;
    var telefon = document.getElementById("telefon").value;
    var poruka = document.getElementById("poruka").value;

    if (imePrezime === "" || email === "" || telefon === "" || poruka === "" || document.getElementById("selectedProducts").value === "1") {
        alert("Bitte füllen Sie alle Felder aus, bevor Sie die Nachricht senden.");
    } else {
     
        document.getElementById("contactForm").action = '../MGer.html';

        setTimeout(function() {
            alert("Ihre Reservierung wurde erfolgreich registriert. Vielen Dank für Ihr Vertrauen! Erwarten Sie bald unsere Antwort.");
          document.getElementById("contactForm").submit();
        }, 10);
    
    }
}