import * as React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TaskList } from "./TaskList";
import { TaskItem } from "./TaskListItem";

describe("TaskList", () => {
  // TODO: Step 4
  it("displays a default message when no tasks have been provided", () => {
    render(<TaskList tasks={[]} />);

    expect(screen.getByText("No tasks have been added yet."));
  });

  // TODO: Step 5
  it("correctly renders a list of TaskItems when provided", async () => {
    render(
      <TaskList
        tasks={
          [
            { title: "Task 1", date: new Date(2021, 1, 1) },
            { title: "Task 2", date: new Date(2021, 1, 2) }
          ] as TaskItem[]
        }
      />
    );

    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
  });
});
