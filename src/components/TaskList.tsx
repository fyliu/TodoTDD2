import React from "react";
import { TaskItem, TaskListItem } from "./TaskListItem";

type Props = {
  tasks: TaskItem[];
  onDelete?: () => void;
};

export const TaskList: React.FC<Props> = ({ tasks, onDelete }) => (
  <>
    {tasks.length === 0
      ? "No tasks have been added yet."
      : tasks.map((task) => (
          <div key={task.title}>
            <TaskListItem date={task.date} title={task.title} />
            <button onClick={onDelete}>Delete</button>
          </div>
        ))}
  </>
);
