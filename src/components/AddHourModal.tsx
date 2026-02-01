import { useState } from "react";
import { addHour } from "../api/hours";

export default function AddHourModal() {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("Dept");
  const [startTime, setStart] = useState("");
  const [endTime, setEnd] = useState("");

  const submit = async () => {
    await addHour({ task, category, startTime, endTime });
    alert("Hour log added");
  };

  return (
    <div className="add-hour-card">
      <div className="form-row">
        <label>Task</label>
        <input
          placeholder="e.g. Dept meeting, Event duty"
          value={task}
          onChange={e => setTask(e.target.value)}
        />
      </div>

      <div className="form-row">
        <label>Category</label>
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="Dept">Department</option>
          <option value="Meet">Meeting</option>
          <option value="Event">Event</option>
          <option value="Misc">Misc</option>
        </select>
      </div>

      <div className="form-grid">
        <div className="form-row">
          <label>Start Time</label>
          <input type="datetime-local" onChange={e => setStart(e.target.value)} />
        </div>

        <div className="form-row">
          <label>End Time</label>
          <input type="datetime-local" onChange={e => setEnd(e.target.value)} />
        </div>
      </div>

      <button className="primary-btn" onClick={submit}>
        Submit Hours
      </button>
    </div>
  );
}
