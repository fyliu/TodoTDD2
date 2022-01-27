import React, { useState } from "react";
import { TaskItem } from "./TaskListItem";

type Props = {
  onSubmit: (taskItem: TaskItem) => void;
  onCancel: () => void;
};

export const AddTaskModal: React.FC<Props> = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState("");

  const onSubmitHandler = () => {};

  const onCancelHandler = () => {};

  const onKeyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {};

  return (
    <>
      <label htmlFor="title">Task Title</label>
      <input
        id="title"
        name="Task Title"
        placeholder="Task Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button disabled={!title}>Submit</button>
    </>
  );
};
