"use strict";

const spans = document.querySelectorAll(".name span");
const leftCorner = document.querySelector(".leftCorner")

spans.forEach(async (span) => {
    let slide = span.animate({ textIndent: "0" }, { duration: 4000, fill: "forwards" });
    await slide.finished;

    let fade = span.animate({ opacity: "0" }, { duration: 2000, fill: "forwards" });
    await fade.finished;
    slide.cancel();

    span.textContent = span.dataset.text;
    fade.reverse();
    await fade.finished;
    slide = span.animate({ textIndent: "0" }, { duration: 4000, fill: "forwards" });
    await slide.finished;

    fade = span.animate({ opacity: "0" }, { duration: 2000, fill: "forwards" });
    await fade.finished;
    slide.play();

    // Ajoute une pause de 1000 ms (1 seconde) avant de passer à la prochaine animation
    

    async function lastText() {
    if (span.dataset.text === "Timothée") {
    span.textContent = "Welcome";
    span.style.color = "rgba(0,255,224,1)"
    fade = span.animate({ opacity: "0" }, { duration: 2000, fill: "forwards" });
    await fade.finished;
    slide.cancel();
    span.animate({ opacity: "1" }, { duration: 2000, fill: "forwards" });
    slide.play()
    }
    if (span.dataset.text === "Cresson") {
    span.textContent = "To my Portfolio";
    leftCorner.style.padding = "5px"
    leftCorner.style.paddingTop = "30px"

    fade = span.animate({ opacity: "0" }, { duration: 2000, fill: "forwards" });
    await fade.finished;
    slide.cancel();
    span.animate({ opacity: "1" }, { duration: 2000, fill: "forwards" });
    slide.play()
    }
}
    lastText();
});
