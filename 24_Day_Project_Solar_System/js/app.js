function createPlanets() {
    let select = document.querySelector("select");
    let planets = [
        "Earth", "Jupiter", "Mars", "Mercury",
        "Moon", "Neptune", "Pluto", "Saturn",
        "Uranus", "Venus"
    ]
    for (let i = 0; i < planets.length; i++) {
        let item = document.createElement("option");
        item.classList.add(`${planets[i].toLowerCase()}`);
        item.textContent = `${planets[i]}`;
        let img = document.createElement("img");
        select.appendChild(item);
    }
}

function renderImages() {
    let planet = document.querySelector("select");
    let img = document.querySelector(".planet-image");
    planet.addEventListener("change", function(evt) {
        evt.preventDefault();
        if (planet.value === "Earth") {
            img.src = "media/images/earth.png";
        } else if (planet.value === "Jupiter") {
            img.src = "media/images/jupiter.png";
        } else if (planet.value === "Mars") {
            img.src = "media/images/mars.png"
        } else if (planet.value === "Mercury") {
            img.src = "media/images/mercury.png";
        } else if (planet.value === "Moon") {
            img.src = "media/images/moon.png";
        } else if (planet.value === "Neptune") {
            img.src = "media/images/neptune.png";
        } else if (planet.value === "Pluto") {
            img.src = "media/images/pluto.png";
        } else if (planet.value === "Saturn") {
            img.src = "media/images/saturn.png";
        } else if (planet.value === "Uranus") {
            img.src = "media/images/uranus.png";
        } else if (planet.value === "Venus") {
            img.src = "media/images/venus.png";
        }
    })
}

function calculateWeight() {
    let calculateButton = document.querySelector("#calculate");
    let resultWeight = 0;
    let img = document.querySelector(".planet-image");
    calculateButton.addEventListener('click', function(evt) {
        evt.preventDefault();
        let planet = document.querySelector("select");
        let mass = document.querySelector("#mass").value;
        if (planet.value === 'none' && mass.value === undefined) {
            alert("Select planet");
            return;
        } else if (planet.value === "Earth") {
            img.src = "media/images/earth.png";
            resultWeight = (mass * 9.8).toFixed(2);
        } else if (planet.value === "Jupiter") {
            resultWeight = (mass * 24.8).toFixed(2);
        } else if (planet.value === "Mars") {
            resultWeight = (mass * 3.7).toFixed(2);
        } else if (planet.value === "Mercury") {
            resultWeight = (mass * 3.7).toFixed(2);
        } else if (planet.value === "Moon") {
            resultWeight = (mass * 1.62).toFixed(2);
        } else if (planet.value === "Neptune") {
            resultWeight = (mass * 10.15).toFixed(2);
        } else if (planet.value === "Pluto") {
            resultWeight = (mass * 0.66).toFixed(2);
        } else if (planet.value === "Saturn") {
            resultWeight = (mass * 10.4).toFixed(2);
        } else if (planet.value === "Uranus") {
            resultWeight = (mass * 8.87).toFixed(2);
        } else if (planet.value === "Venus") {
            resultWeight = (mass * 8.87).toFixed(2);
        }

        let description = document.querySelector(".description");
        description.innerHTML= `<span>THE WEIGHT IN ${planet.value} is </span><br><span style="font-weight: 700">${resultWeight} N</span>`;
        planet.value = "none";
    })
}

createPlanets();
calculateWeight();
renderImages();