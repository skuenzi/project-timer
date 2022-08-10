import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import Timer from "./Timer";
import AddTimerForm from "./AddTimerForm";

export default function Timers(second) {
 const [showAddTimerForm, setShowAddTimerForm] = useState(false);
  const [timers, setTimers] = useState(
    JSON.parse(localStorage.getItem("timers")) || []
  );
  const [newTimerData, setNewTimerData] = useState({
    id: nanoid(),
    projectName: "",
    time: 0
  });

  // update newTimerDate with each keystroke
  const handleChange = (e) => {
    setNewTimerData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  // adds timer on button click
  const addTimer = (e) => {
    e.preventDefault();
    console.log(newTimerData, e.target)

    // adds new timer to timers array
    setTimers((prevTimers) => [...prevTimers, newTimerData]);
    // localStorage.setItem('timers', JSON.stringify(timers))

    // empties form
    setNewTimerData({
      id: nanoid(),
      projectName: "",
      time: 0
    });

    setShowAddTimerForm(false)
  };

  const handleDelete = (id) => {
    let updatedTimers = timers.filter(timer => timer.id !== id )
    console.log(updatedTimers)
    setTimers(updatedTimers)
  }

  useEffect(() => {
    localStorage.setItem('timers', JSON.stringify(timers))
  }, [timers])


  return (
    <main>
      {timers.map((timer) => (
        <Timer key={timer.id} handleDelete={handleDelete} {...timer}/>
      ))}
      <AddTimerForm
        handleChange={handleChange}
        newTimerData={newTimerData}
        handleSubmit={addTimer}
        showAddTimerForm={showAddTimerForm}
        setShowAddTimerForm={setShowAddTimerForm}
      />
    </main>
  );
}
