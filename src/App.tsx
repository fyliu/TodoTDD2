import React, { useState } from "react";
import { AddTaskModal } from "./components/AddTaskModal";
import { TaskItem } from "./components/TaskListItem";

export default function App() {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  const addTaskHandler = (taskItem: TaskItem) => {
    setShowAddTaskModal(false);
  };

  return (
    <>
      Task Tracker
      {showAddTaskModal ? (
        <AddTaskModal onSubmit={addTaskHandler} />
      ) : (
        <button
          onClick={() => {
            setShowAddTaskModal(true);
          }}
        >
          Add Task
        </button>
      )}
    </>
  );
}
