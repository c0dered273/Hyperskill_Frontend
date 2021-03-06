// let keys = document.querySelectorAll("kbd");
// keys.forEach(key => key.addEventListener("click", keysHandler));
//
// function keysHandler(event) {
//     let message = `The '${event.target.textContent}' key is pressed.`;
//     console.log(message);
// }

document.addEventListener("keydown", kbdKeyHandler);

function kbdKeyHandler(event) {
    if (event.code === "KeyA") {
        let audio = new Audio("media/A.mp3");
        audio.play();
    } else if (event.code === "KeyS") {
        let audio = new Audio("media/S.mp3");
        audio.play();
    } else if (event.code === "KeyD") {
        let audio = new Audio("media/D.mp3");
        audio.play();
    } else if (event.code === "KeyF") {
        let audio = new Audio("media/F.mp3");
        audio.play();
    } else if (event.code === "KeyG") {
        let audio = new Audio("media/G.mp3");
        audio.play();
    } else if (event.code === "KeyH") {
        let audio = new Audio("media/H.mp3");
        audio.play();
    } else if (event.code === "KeyJ") {
        let audio = new Audio("media/J.mp3");
        audio.play();
    } else if (event.code === "KeyW") {
        let audio = new Audio("media/W.mp3");
        audio.play();
    } else if (event.code === "KeyE") {
        let audio = new Audio("media/E.mp3");
        audio.play();
    } else if (event.code === "KeyT") {
        let audio = new Audio("media/T.mp3");
        audio.play();
    } else if (event.code === "KeyY") {
        let audio = new Audio("media/Y.mp3");
        audio.play();
    } else if (event.code === "KeyU") {
        let audio = new Audio("media/U.mp3");
        audio.play();
    } else {
        console.log("Warning: unbound key")
    }
}

function printKeyToConsole(key) {
    console.log(`The '${key}' key is pressed.`);
}