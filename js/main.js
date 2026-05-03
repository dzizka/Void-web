function otvorLightbox(src, popis) {
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox-popis").textContent = popis;
}

function zatvorLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

document.addEventListener("click", function(e) {
    var lb = document.getElementById("lightbox");
    if (lb && e.target === lb) {
        zatvorLightbox();
    }
});

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        zatvorLightbox();
    }
});

function skontrolujFormular() {

    var meno   = document.getElementById("meno").value;
    var email  = document.getElementById("email").value;
    var vek    = document.getElementById("vek").value;
    var tema   = document.getElementById("tema").value;
    var sprava = document.getElementById("sprava").value;
    var suhlas = document.getElementById("suhlas").checked;

    var zdrojButtons = document.getElementsByName("zdroj");
    var zdrojVybrane = false;
    for (var i = 0; i < zdrojButtons.length; i++) {
        if (zdrojButtons[i].checked) {
            zdrojVybrane = true;
        }
    }

    var chyby = [];

    if (meno.length < 3) {
        chyby.push("Meno musí mať aspoň 3 znaky.");
    }

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        chyby.push("Zadaj platný e-mail (musí obsahovať @ a .)");
    }

    if (vek === "" || vek < 10 || vek > 99) {
        chyby.push("Zadaj vek medzi 10 a 99.");
    }

    if (tema === "") {
        chyby.push("Vyber tému správy.");
    }

    if (!zdrojVybrane) {
        chyby.push("Vyber ako si nás našiel.");
    }

    if (sprava.length < 10) {
        chyby.push("Správa musí mať aspoň 10 znakov.");
    }

    if (!suhlas) {
        chyby.push("Musíš súhlasiť so spracovaním údajov.");
    }

    var divChyby  = document.getElementById("chyby");
    var divUspech = document.getElementById("uspech");

    if (chyby.length > 0) {
        divChyby.style.display = "block";
        divUspech.style.display = "none";

        divChyby.innerHTML = "<strong>Oprav nasledujúce chyby:</strong><br><br>";
        for (var j = 0; j < chyby.length; j++) {
            divChyby.innerHTML = divChyby.innerHTML + "• " + chyby[j] + "<br>";
        }

    } else {
        divChyby.style.display = "none";
        divUspech.style.display = "block";
    }
}