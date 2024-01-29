function validateForm() {
    var imePrezime = document.getElementById("imePrezime").value;
    var email = document.getElementById("email").value;
    var telefon = document.getElementById("telefon").value;
    var poruka = document.getElementById("poruka").value;

    if (imePrezime === "" || email === "" || telefon === "" || poruka === "" || document.getElementById("selectedProducts").value === "1") {
        alert("Molimo popunite sva polja pre slanja poruke.");
    } else  {
       
        document.getElementById("contactForm").action = '../M.html';

        setTimeout(function() {
            alert("Vaša rezervacija je uspešno zabeležena. Hvala vam na poverenju! Očekujte naš odgovor uskoro.");
          document.getElementById("contactForm").submit();
        }, 10);
    }
}
