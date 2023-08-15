const app = {
  selectedValue: null, // Variable pour stocker la valeur sélectionnée

  init: function () {
    app.addEvent();
  },

  addEvent: function () {
    const btnNotes = document.querySelectorAll(".btn");
    for (const btn of btnNotes) {
      btn.addEventListener("click", app.handleNoteClick);
    }

    const btnSubmit = document.getElementById("btn-submit-ask");
    btnSubmit.addEventListener("click", app.handleSubmit);
  },

  handleNoteClick: function (e) {
    app.selectedValue = e.currentTarget.value; // Stocker la valeur sélectionnée
  },

  handleSubmit: function (e) {
    e.preventDefault();
    const blocAsk = document.querySelector("#container-ask");
    blocAsk.classList.add("container-ask--off");

    const blocSelected = document.querySelector(".container-selected");
    blocSelected.classList.add("container-selected--on");

    const inputSelected = document.querySelector("#you-selected");

    if (app.selectedValue !== null) {
      const p = document.createElement("p");
      p.textContent = "You selected " + app.selectedValue + " out of 5";

      inputSelected.innerHTML = ""; // Effacer le contenu précédent
      inputSelected.appendChild(p);
    } else {
      inputSelected.innerHTML = ""; // Effacer le contenu s'il n'y a pas de valeur sélectionnée
    }
  },
};

document.addEventListener("DOMContentLoaded", app.init);
