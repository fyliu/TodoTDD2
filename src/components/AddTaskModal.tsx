import React from "react";
import { TaskItem } from "./TaskListItem";

type Props = {
  onSubmit: (taskItem: TaskItem) => void;
  onCancel: () => void;
};

export const AddTaskModal: React.FC<Props> = ({ onSubmit, onCancel }) => {
  const onSubmitHandler = () => {};

  const onCancelHandler = () => {};

  const onKeyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {};

  return (
    <>
      <label htmlFor="title">Task Title</label>
      <input id="title" name="Task Title" placeholder="Task Title" />
      <button disabled={true}>Submit</button>
    </>
  );
};
