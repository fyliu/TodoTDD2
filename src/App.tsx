import React, { useState } from "react";
import { AddTaskModal } from "./components/AddTaskModal";
import { TaskList } from "./components/TaskList";
import { TaskItem } from "./components/TaskListItem";

export default function App() {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [tasks, setTasks] = useState<TaskItem[]>([]);

  const removeByIndex = (array: TaskItem[], index: number) => {
    return array.filter((item, i) => i !== index);
  };

  const addTaskHandler = (taskItem: TaskItem) => {
    setShowAddTaskModal(false);
    setTasks((prev) => [...prev, taskItem]);
  };

  const onDeleteHandler = (index: number) => {
    setTasks((prev) => removeByIndex(prev, index));
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
      <TaskList tasks={tasks} onDelete={onDeleteHandler} />
    </>
  );
}
