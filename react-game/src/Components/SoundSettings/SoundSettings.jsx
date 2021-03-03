import {useState} from "react";
import useSound from "use-sound";
import bcgSound from "../../music/bcg.mp3";

const SoundSettings = (props) => {

    const [volume, setVolume] = useState(0.75);

    const [play, {stop}] = useSound(
        bcgSound,
        {
            volume,
            interrupt: true
        },
    )

    function changeVolume(e) {
        setVolume(e.target.value)
    }

    return (
        <div>
            <div> sound settings</div>
            <div>
                <span>Sound Volume</span>
                <div>
                    <button onClick={() => props.stop(0)}>OFF</button>
                    <button onClick={() => props.stop(1)}>ON</button>
                </div>
            </div>
            <div>
                <span>Music Volume</span>
                <input type="range" min="0" max="1" step="0.001" onClick={e => changeVolume(e)}/>
                <div>
                    <button onClick={() => stop()}>OFF</button>
                    <button onClick={play}>ON</button>
                </div>
            </div>
            <button className='' onClick={() => props.setSoundSettings(!props.soundSettings)}>
                To Main Menu
            </button>
        </div>
    )
}

export default SoundSettings
