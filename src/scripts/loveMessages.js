const messages = [
    "Con amigos como tú, la vida es más fácil",
    "Eres la amiga que todos deberían tener.",
    "La amistad es un regalo que valoro cada día",
    "Pa ti Guapa jsjs",

];
const msg = document.getElementById("welcome-message");
const randomPosition = Math.floor(Math.random() * messages.length);
msg.innerText = messages[randomPosition];