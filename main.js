var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
camera = document.getElementById("camera");
function save() {
    recognition.start();
}
function speak() {
    synth = window.speechSynthesis;
    speakdata = "taking your selfie in 5 seconds";
    utterthis = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(() => {
        snapshot();
    }, 5000);
}
recognition.onresult = function (event) {
    content = event.results[0][0].transcript;
    if (content.includes("take my selfie")) {
        speak();
    }
}
Webcam.set({

    width: 400,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

function snapshot() {
    console.log(img_id)

    Webcam.snap(function (data) {
        document.getElementById("result").innerHTML = "<img id='selfie_image' src='" + data + "'>";
    })
}