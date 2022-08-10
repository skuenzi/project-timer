export default function Timer(props) {
    
    return (
        <>
            <div className="timer-container">
                <h2 className="timer-name">{props.projectName}</h2>
                <p className="timer-time">00:00:00</p>
                <button type="button" className="timer-start btn">Start</button>
                <button type="button" className="timer-pause btn">Pause</button>
                <button type="button" className="timer-reset btn">Reset</button>
            </div>
        </>
    )
}