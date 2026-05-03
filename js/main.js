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
