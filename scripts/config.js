function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; //ebbe kerülnek a data- attributumok, +: a stringet számmá konvertálja: +'1' -> 1
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault(); //nem az alapértelmezett módot fogja használni a böngésző a form submithoz
  const formData = new FormData(event.target); //egy objektum példányából csinálunk egy újat 'object blueprints'
  const enteredPlayerName = formData.get("playername").trim(); //Az adott 'name'-hoz tartozó értéket kaphatjuk így meg (get), trim: '       ' -> '' (empty string)

  if (!enteredPlayerName) {
    //Megnézi, hogy a beírt playername nem-e üres string (az enteredPlayerName ha üres, false-t fog visszaadni, ezért a ! jellel megfordítjuk)
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name!";
    return; //return esetén a függvény befejezi a futást
  }

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
}
