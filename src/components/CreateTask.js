import React, { useState } from "react";

export default function CreateTask(props) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Звичайна");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() === "") {
      alert("Поле не може бути порожнім");
      return;
    }
    if (task.length > 70) {
      alert("Поле не може бути більше 70 символів");
      return;
    }

    console.log(task);
    props.addTask(task, priority);
    setTask("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => setTask(event.target.value)}
          value={task}
          type="text"
          placeholder="Напишіть задачу"
        />
        <select
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
        >
          <option value="Важлива">Важлива</option>
          <option value="Звичайна">Звичайна</option>
          <option value="Надважлива">Надважлива</option>
        </select>
        <button type="submit" className="btn">
          Створити
        </button>
      </form>
    </div>
  );
}
