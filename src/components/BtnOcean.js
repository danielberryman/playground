import '../App.css';
import './BtnOcean.css';

let playing = false;
let audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-sea-waves-ambience-1189.mp3');
audio.loop = true;

function BtnOcean() {
    return (
        <div className="col">
            <div className="circle" onClick={toggleWaves}></div>
        </div>
    );
}

function toggleWaves() {
    if (playing === true) {
        audio.pause();
        playing = false;
    } else {
        audio.play();
        playing = true;
    }
}

export default BtnOcean;