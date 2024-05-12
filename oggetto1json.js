fetch("https://wwww.cacciaapi.altervista.org/login.php/loginIpad", {
 method: "POST",
 headers: {
  "Content-Type": "application/json",
},
 body: JSON.stringify({
  {"nome": "Game1", "codice": "Partita1", "stato": "attivo"},
  {"nome": "Game2", "codice": "Partita2", "stato": "non attivo"},
  {"nome": "Game3", "codice": "Partita3", "stato": "attivo"},
  {"nome": "Game4", "codice": "Partita4", "stato": "attivo"},
 })
})
.then(response => response.json(()
.them(data => console.log(data))
.catch((error) => {
  console.error("Si è verificato un errore:", error);
});

}
