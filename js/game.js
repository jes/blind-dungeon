let map = new BlindDungeonMap();
let pos = [0,0];

function move(dx,dy) {
    let newpos = [pos[0]+dx, pos[1]+dy];
    if (map.canmove(newpos)) {
        pos = newpos;
        switch (map.at(pos)) {
            case '.': speak("ok"); break;
            case '!': speak("Congratulations! You found the exit.", {rate:1.0}); break;
        }
    } else {
        speak("wall");
    }
}

function help() {
    speak("You are in a maze. Use arrow keys to move. Try to find the exit. Good luck.", {rate: 0.8});
}

let timer = window.setInterval(function() {
    speak("Press h for help.",{rate:0.8});
}, 5000);

$(document).keydown(function(e) {
    switch (e.key) {
        case "ArrowLeft":  move(-1, 0); break;
        case "ArrowRight": move( 1, 0); break;
        case "ArrowUp":    move( 0,-1); break;
        case "ArrowDown":  move( 0, 1); break;
        case "h":          help(); break;
    }
    clearInterval(timer);
});

speak("Welcome. Press h for help.");
