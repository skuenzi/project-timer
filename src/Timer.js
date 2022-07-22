export default function Timer(second) {

    
    return (
        <>
            <div className="timer-container">
                <h2 className="timer-name">Name</h2>
                <p className="timer-time">00:00:00</p>
                <button type="button" className="timer-start btn">Start</button>
                <button type="button" className="timer-pause btn">Pause</button>
                <button type="button" className="timer-reset btn">Reset</button>
            </div>
        </>
    )
}