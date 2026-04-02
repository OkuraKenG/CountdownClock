let launchTime;
let selectedColor;
let intervalID;
let ctx;
startProgram();

function startProgram() {
    const canvas = document.getElementById(`cTimer`);
    ctx = canvas.getContext('2d');
    canvas.height = 260;
    canvas.width = 1380;
    document.getElementById("selectColor").addEventListener("change", updateColor);
    document.getElementById("testDahLights").addEventListener("click", testMode);

    updateColor();


    const paramsString = window.location.search;
    const searchParams = new URLSearchParams(paramsString);
    launchTime = searchParams.get("time") ? new Date(Number.parseInt(searchParams.get("time"))) : null;

    if (launchTime) {
        timeStart();
    }

    document.getElementById("startMe").addEventListener("click", timeStart);
}
