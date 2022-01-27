import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AddTaskButton } from "./AddTaskButton";

describe("Add Task", () => {
  // TODO: Step 2
  it("triggers the onClick handler when clicked", () => {
    const mockOnClick = jest.fn();
    render(<AddTaskButton toggleModal={mockOnClick} />);

    userEvent.click(screen.getByText("Add Task"));

    expect(mockOnClick).toHaveBeenCalled();
  });
});
