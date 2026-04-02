
function updateColor() {
    selectedColor = document.getElementById("selectColor").value;

    if (selectedColor == `black`) {
        document.getElementsByTagName("body")[0].style.background = "rgb(255,255,255)";
        document.getElementById("eee").style.color = "rgb(0,0,0)";
    } else {
        document.getElementsByTagName("body")[0].style.background = "rgb(0,0,0)";
    }


    //draw blank clock
    drawColon(ctx);
    drawClock(ctx, 0, "0000000");
    drawClock(ctx, 160, "0000000");
    drawClock(ctx, 360, "0000000");
    drawClock(ctx, 520, "0000000");
    drawClock(ctx, 720, "0000000");
    drawClock(ctx, 880, "0000000");
    drawClock(ctx, 1080, "0000000");
    drawClock(ctx, 1240, "0000000");
}

function timeStart() {
    launchTime = launchTime ?? new Date(document.getElementById("dateLaunch").value);
    selectedColor = document.getElementById("selectColor").value;
    if (launchTime == "Invalid Date") {
        alert("Error! Invalid time...");
    } else {
        // document.getElementById("timer").textContent = "";
        // document.getElementById("startMe").disabled = true;
        selectedColor = document.getElementById("selectColor").value;
        document.getElementById("centerMe").setAttribute("style", "position: fixed;top: 0;left: 0;right: 0;bottom: 0;")
        // document.getElementById("eee").textContent = `Timer set to: ${launchTime}`;
        console.log(launchTime);    
        document.getElementById("input").remove();
        intervalID = setInterval(timee, 500, launchTime.valueOf() + 1000); //1 sec off error
    }

}

function timee(launchTime) {

    let diff = Math.abs(launchTime - Date.now());

    let days = Math.trunc(diff / 86400000)
    diff = diff % 86400000; //hours
    let hours = Math.trunc(diff / 3600000);
    diff = diff % 3600000;
    let min = Math.trunc(diff / 60000);
    diff = diff % 60000;
    let sec = Math.trunc(diff / 1000);

    if (`${days}`.length == 1) {
        days = `0${days}`
    }


    if (`${hours}`.length == 1) {
        hours = `0${hours}`
    }

    if (`${min}`.length == 1) {
        min = `0${min}`
    }

    if (`${sec}`.length == 1) {
        sec = `0${sec}`
    }

    // document.getElementById("timer").textContent = `${days}:${hours}:${min}:${sec}`
    days += "";
    hours += "";
    min += "";
    sec += "";

    drawClock(ctx, 0, numToBin(days.charAt(0)));
    drawClock(ctx, 160, numToBin(days.charAt(1)));
    drawClock(ctx, 360, numToBin(hours.charAt(0)));
    drawClock(ctx, 520, numToBin(hours.charAt(1)));
    drawClock(ctx, 720, numToBin(min.charAt(0)));
    drawClock(ctx, 880, numToBin(min.charAt(1)));
    drawClock(ctx, 1080, numToBin(sec.charAt(0)));
    drawClock(ctx, 1240, numToBin(sec.charAt(1)));

}

function drawClock(ctx, base, indicators) {
    let colorA, colorB;
    switch (selectedColor) {
        case 'black':
            colorA = 'rgba(245,245,245,1)';
            colorB = 'rgba(0,0,0,1)'
            break;
        case 'red':
            colorA = 'rgba(20,0,0,1)';
            colorB = 'rgba(255,0,0,1)';
            break;
        case 'green':
            colorA = 'rgba(0,10,0,1)';
            colorB = 'rgba(0,200,0,1)';
            break;
        case 'yellow':
            colorA = 'rgba(27,27,0,1)';
            colorB = 'rgba(254,242,14,1)';
            break;
        case 'blue':
            colorA = 'rgba(0,15,15,1)';
            colorB = 'rgba(0,164,242,1)';
            break;
    }

    for (let i = 0; i < indicators.length; i++) {
        let ele = indicators.charAt(i);
        if (ele == 0) {
            ctx.fillStyle = colorA;
        } else {
            ctx.fillStyle = colorB;
        }
        switch (i) {
            case 0:
                ctx.fillRect(base + 20, 0, 100, 20);
                break;
            case 1:
                ctx.fillRect(base + 120, 20, 20, 100);
                break;
            case 2:
                ctx.fillRect(base + 120, 140, 20, 100);
                break;
            case 3:
                ctx.fillRect(base + 20, 240, 100, 20);
                break;
            case 4:
                ctx.fillRect(base + 0, 140, 20, 100);
                break;
            case 5:
                ctx.fillRect(base + 0, 20, 20, 100);
                break;
            case 6:
                ctx.fillRect(base + 20, 120, 100, 20);
                break;
        }

    }
}

function numToBin(num) {
    num = Number.parseInt(num);
    switch (num) {
        case 0:
            return "1111110";
        case 1:
            return "0110000";
        case 2:
            return "1101101";
        case 3:
            return "1111001";
        case 4:
            return "0110011";
        case 5:
            return "1011011";
        case 6:
            return "1011111";
        case 7:
            return "1110000";
        case 8:
            return "1111111";
        case 9:
            return "1111011";
    }


}

function drawColon(ctx) {
    let colorA;
    switch (selectedColor) {
        case 'black':
            colorA = 'rgba(0, 0, 0, 1)';
            break;
        case 'red':
            colorA = 'rgba(255,0,0,1)';
            break;
        case 'green':
            colorA = 'rgba(0,200,0,1)';
            break;
        case 'yellow':
            colorA = 'rgba(254,242,14,1)';
            break;
        case 'blue':
            colorA = 'rgba(0,164,242,1)';
            break;
    }
    ctx.fillStyle = colorA;
    if (document.getElementById("eee"))
        document.getElementById("eee").style.color = colorA;
    ctx.fillRect(320, 100, 20, 20);
    ctx.fillRect(320, 220, 20, 20);
    ctx.fillRect(680, 100, 20, 20);
    ctx.fillRect(680, 220, 20, 20);
    ctx.fillRect(1040, 100, 20, 20);
    ctx.fillRect(1040, 220, 20, 20);
}

let indexA = 0;
let arr = ["1111110", "0110000", "1101101", "1111001", "0110011", "1011011", "1011111", "1110000", "1111111", "1111011", "0000000"]; //count 0-9

function testMode() {
    selectedColor = document.getElementById("selectColor").value;
    document.getElementById("centerMe").setAttribute("style", "position: fixed;top: 0;left: 0;right: 0;bottom: 0;")
    document.getElementById("input").remove();
    intervalID = setInterval(TEST, 1000);
}

function TEST() {
    drawClock(ctx, 0, arr[indexA]);
    drawClock(ctx, 160, arr[indexA]);
    drawClock(ctx, 360, arr[indexA]);
    drawClock(ctx, 520, arr[indexA]);
    drawClock(ctx, 720, arr[indexA]);
    drawClock(ctx, 880, arr[indexA]);
    drawClock(ctx, 1080, arr[indexA]);
    drawClock(ctx, 1240, arr[indexA]);

    indexA++;
    if (arr.length == indexA) {
        indexA = 0;
    }
}
/**
 * Only for numbers <= 127
 * @param {*} num 
 * @returns 
 */
function numTo7Bin(num) {
    let str = "";
    if (num == 0) {
        str = "0000000";
    }

    let pow = 6;
    while (str.length < 7) {
        if ((num / Math.pow(2, pow)) >= 1) {
            str += "1";
            num = num % Math.pow(2, pow)
        } else {
            str += "0";
        }
        pow--;
    }

    return str;
}