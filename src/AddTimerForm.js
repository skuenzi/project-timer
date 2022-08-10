
import { AiOutlinePlus } from "react-icons/ai";

export default function AddTimerForm(props) {
  return (
    <article className="add-timer">
      {!props.showAddTimerForm ? (
        <AiOutlinePlus
          className="add-timer-btn"
          onClick={() => props.setShowAddTimerForm((prevState) => !prevState)}
        />
      ) : (
        <form className="add-timer-form">
          <input
            name="projectName"
            type="text"
            value={props.newTimerData.projectName}
            onChange={props.handleChange}
            placeholder="project name"
            className="name-input"
          ></input>
          <button
            type="button"
            className="submit btn"
            onClick={props.handleSubmit}
          >
            Add Timer
          </button>
        </form>
      )}
    </article>
  );
}
