import React from "react";
import { TaskItem, TaskListItem } from "./TaskListItem";

type Props = {
  tasks: TaskItem[];
  onDelete?: (index: number) => void;
};

export const TaskList: React.FC<Props> = ({ tasks, onDelete }) => (
  <>
    {tasks.length === 0
      ? "No tasks have been added yet."
      : tasks.map((task, i) => (
          <div key={i}>
            <TaskListItem date={task.date} title={task.title} />
            <button
              onClick={() => {
                if (onDelete !== undefined) {
                  onDelete(i);
                }
              }}
            >
              Delete
            </button>
          </div>
        ))}
  </>
);
