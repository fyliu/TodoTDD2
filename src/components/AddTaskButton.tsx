import * as React from "react";

type Props = {
  toggleModal: () => void;
};

export const AddTaskButton: React.FC<Props> = ({ toggleModal }) => (
  <>
    <button onClick={toggleModal}>Add Task</button>
  </>
);
