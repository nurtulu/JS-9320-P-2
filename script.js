document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggleButton");
    const filterButton = document.getElementById("filterButton");
    const filterForm = document.getElementById("filterForm");
    const characterContainer = document.getElementById("characterContainer");
    const homeworldFilters = document.getElementById("homeworldFilters");
    let charactersVisible = false;

const characters = [
    {
        id: 1,
        name: "Luke Skywalker",
        image: "images/luke-skywalker.jpg",
        homeworld: "tatooine"
      },
      {
        id: 2,
        name: "C-3PO",
        image: "images/c-3po.jpg",
        homeworld: "tatooine"
      },
      {
        id: 3,
        name: "R2-D2",
        image: "images/r2-d2.jpg",
        homeworld: "naboo"
      },
      {
        id: 4,
        name: "Darth Vader",
        image: "images/darth-vader.jpg",
        homeworld: "tatooine"
      },
      {
        id: 5,
        name: "Leia Organa",
        image: "images/leia-organa.jpg",
        homeworld: "alderaan"
      },
      {
        id: 6,
        name: "Owen Lars",
        image: "images/owen-lars.jpeg",
        homeworld: "tatooine"
      },
      {
        id: 7,
        name: "Beru Whitesun lars",
        image: "images/beru-larsjpg.jpg",
        homeworld: "tatooine"
      },
      {
        id: 8,
        name: "R5-D4",
        image: "images/r5-d4.jpg",
        homeworld: "tatooine"
      },
      {
        id: 9,
        name: "Biggs Darklighter",
        image: "images/Biggs-Darklighter.jpg",
        homeworld: "tatooine"
      },
      {
        id: 10,
        name: "Obi-Wan Kenobi",
        image: "images/Obi-Wan-Kenobi.jpg",
        homeworld: "stewjon"
      },
      {
        id: 11,
        name: "Anakin Skywalker",
        image: "images/Anakin-Skywalker.jpg",
        homeworld: "tatooine"
      },
      {
        id: 12,
        name: "Wilhuff Tarkin",
        image: "images/Wilhuff-Tarkin.jpeg",
        homeworld: "eriadu"
      },
      {
        id: 13,
        name: "Chewbacca",
        image: "images/Chewbacca.jpeg",
        homeworld: "kashyyyk"
      },
      {
        id: 14,
        name: "Han Solo",
        image: "images/Han-Solo.jpg",
        homeworld: "corellia"
      },
      {
        id: 15,
        name: "Greedo",
        image: "images/Greedo.jpg",
        homeworld: "Rodia"
      },
      {
        id: 16,
        name: "Jabba Desilijic Tiure",
        image: "images/Jabba-Desilijic-Tiure.jpg",
        homeworld: "tatooine"
      },
      {
        id: 18,
        name: "Wedge Antilles",
        image: "images/wedge-antilles.jpg",
        homeworld: "corellia"
      },
      {
        id: 19,
        name: "Jek Tono Porkins",
        image: "images/jek-porkins.jpeg",
        homeworld: "bestine"
      },
      {
        id: 20,
        name: "Yoda",
        image: "images/Yoda.jpg",
        homeworld: "other"
      },
      {
        id: 21,
        name: "Palpatine",
        image: "images/Palpatine-1.jpg",
        homeworld: "naboo"
      }
]
    

    const homeworldsRaw = characters.map(character => character.homeworld ?? 'other');
    const homeworldsUnique = [...new Set(homeworldsRaw)];
    const homeworldsLowercase = homeworldsUnique.map(homeworld => homeworld.toLowerCase());
    const homeworlds = homeworldsLowercase;

    
    homeworlds.forEach((homeworld, index) => {
        const filterId = `filter-${homeworld}`;
        const radioInput = `<input class="form-check-input" type="radio" name="homeworld" id="${filterId}" value="${homeworld}">
                            <label class="form-check-label" for="${filterId}">${homeworld.charAt(0).toUpperCase() + homeworld.slice(1)}</label><br>`;
        homeworldFilters.innerHTML += radioInput;
    });

    function displayCharacters(filter = "") {
        characterContainer.innerHTML = '';
        characters.filter(character => filter === "" || character.homeworld.toLowerCase() === filter)
                  .forEach(character => {
                      const characterCard = `
                          <div class="col-md-4">
                              <div class="card">
                                  <img src="${character.image}" class="card-img-top" alt="${character.name}">
                                  <div class="card-body">
                                      <h5 class="card-title">${character.name}</h5>
                                      <p class="card-text">Homeworld: ${character.homeworld}</p>
                                  </div>
                              </div>
                          </div>
                      `;
                      characterContainer.innerHTML += characterCard;
                  });
    }

    toggleButton.addEventListener("click", () => {
        if (charactersVisible) {
            characterContainer.innerHTML = '';
            toggleButton.textContent = "Karakterleri Göster";
            toggleButton.classList.remove("btn-danger");
            toggleButton.classList.add("btn-success");
            filterButton.disabled = true;
            filterForm.style.display = 'none';
        } else {
            const selectedHomeworld = document.querySelector('input[name="homeworld"]:checked')?.value || "";
            displayCharacters(selectedHomeworld);
            toggleButton.textContent = "Karakterleri Gizle";
            toggleButton.classList.remove("btn-success");
            toggleButton.classList.add("btn-danger");
            filterButton.disabled = false;
        }
        charactersVisible = !charactersVisible;
    });

    filterButton.addEventListener("click", () => {
        filterForm.style.display = filterForm.style.display === 'none' ? 'block' : 'none';
    });

    homeworldFilters.addEventListener("change", () => {
        if (charactersVisible) {
            const selectedHomeworld = document.querySelector('input[name="homeworld"]:checked').value;
            displayCharacters(selectedHomeworld);
        }
    });
});
