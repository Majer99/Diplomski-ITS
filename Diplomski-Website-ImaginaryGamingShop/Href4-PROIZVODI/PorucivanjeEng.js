function validateForm() {
    var imePrezime = document.getElementById("imePrezime").value;
    var email = document.getElementById("email").value;
    var telefon = document.getElementById("telefon").value;
    var poruka = document.getElementById("poruka").value;

    if (imePrezime === "" || email === "" || telefon === "" || poruka === "" || document.getElementById("selectedProducts").value === "1") {
        alert("Please fill in all fields before sending the message.");
    } else {
      
        document.getElementById("contactForm").action = '../MENG.html';

        setTimeout(function() {
            alert("Your reservation has been successfully recorded. Thank you for your trust! Expect our response soon.");
          document.getElementById("contactForm").submit();
        }, 10);
    
    }
}
