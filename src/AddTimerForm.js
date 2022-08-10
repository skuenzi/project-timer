import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

export default function AddTimerForm(second) {
  const [showAddTimerForm, setShowAddTimerForm] = useState(true);
  return (
    <section className="add-timer">
      {!showAddTimerForm ? (
        <AiOutlinePlus
          className="add-timer-btn"
          onClick={() => setShowAddTimerForm((prevState) => !prevState)}
        />
      ) : (
        <form className="add-timer-form">
          <input
            name="projectName"
            type="text"
            placeholder="project name"
            className="name-input"
          ></input>
          <button
            type="button"
            className="submit btn"
            onClick={() => setShowAddTimerForm((prevState) => !prevState)}
          >
            Add Timer
          </button>
        </form>
      )}
    </section>
  );
}
