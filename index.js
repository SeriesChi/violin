// Get div by id
const btnCapture = document.querySelectorAll("#sound");
const stopBtn = document.querySelector("#stop");

// initialize variable
let sound;
let playState = false;
let btnName;

// set sound play
function soundPlay(audioPath, name) {
    if (!playState) {
        playSound(audioPath);
    } else {
        // console.log("start and play part");
        // soundPause();
        // playSound(audioPath);
        if (btnName == name) {
            console.log("stop part");
            soundPause();
        } else {
            console.log("start and play part");
            soundPause();
            playSound(audioPath);
        }
    }
    btnName=name;
}

// play sound
function playSound(audioPath){
    sound = new Audio(audioPath);
    playState = true;
    sound.play();
}

// Pause played sound
function soundPause() {
    if(sound !== undefined){
        sound.pause();
        playState = false;
        sound.currentTime = 0;
    }
}

// get textInput field
let soundText = document.querySelector("#textInput");

// get pressed or entered character
const setBtn = (btnCaptureText) => {
    switch (btnCaptureText) {
        case "a": {
            console.log("case 1");
            // btnName = "a";
            console.log(btnName);
            document.querySelector('#error').innerHTML = "";
            soundPlay("test1.mp3", "a");
            break;
        }
        case "b": {
            // btnName = "b";
            console.log(btnName);
            document.querySelector('#error').innerHTML = "";
            soundPlay("test2.mp3", "b");
            break;
        }
        case "c": {
            // btnName = "c";
            console.log(btnName);
            document.querySelector('#error').innerHTML = "";
            soundPlay("test3.mp3", "c");
            break;
        }
        default:
            console.log("default");
            document.querySelector('#error').innerHTML = "<div class='text-danger'>!!! Invalid Input. Please Enter Valid Input !!!</div>";
            soundPause();
            break;
    }
};

// for loop for looping all the data
for (i = 0; i < btnCapture.length; i++) {
    const btnCapture = document.querySelectorAll("#sound")[i];
    const btnCaptureText = btnCapture.innerHTML;
    btnCapture.addEventListener("click", () => {
        setBtn(btnCaptureText);
    });
}


// Stop Audio
stopBtn.addEventListener("click", () => {
    soundPause();
})

// Play sound using Input field
soundText.addEventListener('input', function textSound(){
    console.log(soundText.value);
    setBtn(soundText.value);
    if(soundText !== ""){
        document.querySelector('#textInput').value = "";
    }    
});