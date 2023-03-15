const app = document.getElementById("typewriter");

const typewriter = new Typewriter(app, {
    loop: true,
    delay:75
});

typewriter
    .typeString("La ciudad de los Reyes")
    .pauseFor(200)
    .start();