const SoundSettings = (props) => {
    return (
        <div>
            <div> sound settings </div>
            <button className='' onClick={() => props.setSoundSettings(!props.soundSettings)}>
                To Main Menu
            </button>
        </div>
    )
}

export default SoundSettings
