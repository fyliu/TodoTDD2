import React, { useState } from "react";
import { AddTaskModal } from "./components/AddTaskModal";
import { TaskList } from "./components/TaskList";
import { TaskItem } from "./components/TaskListItem";

export default function App() {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [tasks, setTasks] = useState<TaskItem[]>([]);

  const addTaskHandler = (taskItem: TaskItem) => {
    setShowAddTaskModal(false);
    setTasks((prev) => [...prev, taskItem]);
  };

  return (
    <>
      <div>Task Tracker</div>
      {showAddTaskModal ? (
        <AddTaskModal
          onSubmit={addTaskHandler}
          onCancel={() => {
            setShowAddTaskModal(false);
          }}
        />
      ) : (
        <button
          onClick={() => {
            setShowAddTaskModal(true);
          }}
        >
          Add Task
        </button>
      )}
      <TaskList tasks={tasks} />
    </>
  );
}
