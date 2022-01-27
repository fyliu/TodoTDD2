import * as React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TaskListItem } from "./TaskListItem";

describe("TaskListItem", () => {
  // TODO: Step 3
  it.skip("correctly renders a Task List Item", () => {
    render(<TaskListItem title="Task 1" date={new Date(2021, 1, 1)} />);

    expect(screen.getByText("Task 1"));
    expect(screen.getByText("Mon Feb 01 2021"));
  });
});
