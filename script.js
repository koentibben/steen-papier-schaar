const myBoxes = document.querySelector(".boxes");
const steen = myBoxes.querySelectorAll("div")[0];
const papier = myBoxes.querySelectorAll("div")[1];
const schaar = myBoxes.querySelectorAll("div")[2];

let myHeader = document.querySelector("h1");

let aantalKeuzesGemaakt = 0;
let keuzeSpeler1 = "";
let keuzeSpeler2 = "";

function changeHeaderText(string) {
    myHeader.innerHTML = string;
}

changeHeaderText("Speler 1, kies je optie!");

steen.addEventListener("click", function () {
    if (aantalKeuzesGemaakt === 0) {
        keuzeSpeler1 = "steen";
        changeHeaderText("Speler 2, kies je optie!");
        aantalKeuzesGemaakt += 1;
    } else if (aantalKeuzesGemaakt === 1) {
        keuzeSpeler2 = "steen";
        aantalKeuzesGemaakt += 1;
        toonResultaat(keuzeSpeler1, keuzeSpeler2);
    }
});
papier.addEventListener("click", function () {
    if (aantalKeuzesGemaakt === 0) {
        keuzeSpeler1 = "papier";
        changeHeaderText("Speler 2, kies je optie!");
        aantalKeuzesGemaakt += 1;
    } else if (aantalKeuzesGemaakt === 1) {
        keuzeSpeler2 = "papier";
        aantalKeuzesGemaakt += 1;
        toonResultaat(keuzeSpeler1, keuzeSpeler2);
    }
});
schaar.addEventListener("click", function () {
    if (aantalKeuzesGemaakt === 0) {
        keuzeSpeler1 = "schaar";
        changeHeaderText("Speler 2, kies je optie!");
        aantalKeuzesGemaakt += 1;
    } else if (aantalKeuzesGemaakt === 1) {
        keuzeSpeler2 = "schaar";
        aantalKeuzesGemaakt += 1;
        toonResultaat(keuzeSpeler1, keuzeSpeler2);
    }
});

function toonResultaat() {
    const boxClassElements = document.getElementsByClassName("box");
    while (boxClassElements.length > 0) {
        boxClassElements[0].parentNode.removeChild(boxClassElements[0]);
    }
    switch (keuzeSpeler1 + " vs " + keuzeSpeler2) {
        // speler 1 wint
        case "steen vs schaar":
        case "papier vs steen":
        case "schaar vs papier":
            changeHeaderText("Speler 1 wint!");
            break;
        // speler 2 wint
        case "schaar vs steen":
        case "steen vs papier":
        case "papier vs schaar":
            changeHeaderText("Speler 2 wint!");
            break;
        // gelijkspel
        case "steen vs steen":
        case "papier vs papier":
        case "schaar vs schaar":
            changeHeaderText("Gelijkspel! Beide spelers kozen: "
                + keuzeSpeler1);
            break;
        default:
            changeHeaderText("Ik kan niet bepalen wie er gewonnen heeft!");
    }
}