let speech = new SpeechSynthesisUtterance();

let btn = document.querySelector('button');
let textContent = document.querySelector('#text-content');

let voices = [];

let voiceSelect = document.querySelector('.row select');

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    })
}

voiceSelect.addEventListener('change', function(){
    speech.voice = voices[voiceSelect.value];
})

btn.addEventListener('click', function(){
    speech.text = textContent.value;
    window.speechSynthesis.speak(speech);
})