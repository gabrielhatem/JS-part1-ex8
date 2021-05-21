function myFunction() {
    var Age = parseInt(document.getElementById("age").value);
    if (String(Age) == "NaN") {
        alert("Merci de remplir les champs avec que des nombres.")
        return
    }
    if (Age >= 18) {
        alert("Vous êtes majeur")
    } else {
        alert("Vous êtes mineur")
    }
}