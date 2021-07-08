const btnCapture = document.querySelectorAll("#sound");
console.log(btnCapture);

let sound;
let playState = false;
let btnName;
// var btnCaptureText;

function soundPlay(audioPath, name) {
    if (!playState) {
        sound = new Audio(audioPath);
        playState = true;
        sound.play();
    } else {
        console.log(btnName);
        console.log(name);
        if (btnName == name) {
            console.log("stop part");
            soundPause();
        } else {
            console.log("start and play part");
            soundPause();
            sound = new Audio(audioPath);
            playState = true;
            sound.play();
        }
    }
}

function soundPause() {
    sound.pause();
    playState = false;
    sound.currentTime = 0;
}

const setBtn = (btnCaptureText) => {
    console.log(btnCaptureText);
    console.log(btnCaptureText);

    switch (btnCaptureText) {
        case "a": {
            console.log("case 1");
            btnName = "a";
            soundPlay("test1.mp3", "a");
            break;
        }
        case "b": {
            btnName = "b";
            soundPlay("test2.mp3", "b");
            break;
        }
        case "c": {
            btnName = "c";
            soundPlay("test3.mp3", "c");
            break;
        }
        default:
            console.log("default");
            break;
    }
};

for (i = 0; i < btnCapture.length; i++) {
    // console.log(i);
    const btnCapture = document.querySelectorAll("#sound")[i];
    const btnCaptureText = btnCapture.innerHTML;
    // console.log(btnCaptureText);
    btnCapture.addEventListener("click", () => {
        // console.log(btnCaptureText, "im");
        setBtn(btnCaptureText);
    });
}
