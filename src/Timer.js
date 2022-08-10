import { useEffect, useState } from "react";

import {RiDeleteBin6Line} from 'react-icons/ri'

export default function Timer(props) {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval
    if (running) {
        interval = setInterval(() => {
            setTime((prevTime) => prevTime + 10)
        }, 10)
    } else if (!running) {
        clearInterval(interval)
    }
    return () => {clearInterval(interval)}
  }, [running]);

  let hours = ('0' + Math.floor((time / 3600000) % 60)).slice(-2)
  let minutes = ('0' + Math.floor((time / 60000) % 60)).slice(-2)
  let seconds = ('0' + Math.floor((time / 1000) % 60)).slice(-2)

  return (
    <>
      <div className="timer-container">
        <h2 className="timer-name">{props.projectName}</h2>
        <RiDeleteBin6Line className="delete-btn" onClick={() => props.handleDelete(props.id)}/>
        <div className="timer-time">{`${hours}:${minutes}:${seconds}`}</div>
        <button type="button" className="timer-start btn" onClick={() => {setRunning(true)}}>
          Start
        </button>
        <button type="button" className="timer-pause btn" onClick={() => {setRunning(false)}}>
          Pause
        </button>
        <button type="button" className="timer-reset btn" onClick={() => {setTime(0)}}>
          Reset
        </button>
      </div>
    </>
  );
}
