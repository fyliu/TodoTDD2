import React from "react";
import { TaskItem } from "./TaskListItem";

type Props = {
  tasks: TaskItem[];
};

export const TaskList: React.FC<Props> = ({ tasks }) => (
  <>{tasks.length === 0 ? "No tasks have been added yet." : <div> </div>}</>
);
