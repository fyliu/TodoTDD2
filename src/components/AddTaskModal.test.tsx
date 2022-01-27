import * as React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AddTaskModal } from "./AddTaskModal";
import "@testing-library/jest-dom/extend-expect";

describe("Add Task Modal", () => {
  let mockOnClick: () => void;
  let mockOnCancel: () => void;
  beforeEach(() => {
    mockOnClick = jest.fn();
    mockOnCancel = jest.fn();
    render(<AddTaskModal onSubmit={mockOnClick} onCancel={mockOnCancel} />);
  });

  // TODO: Step 6
  it("renders the task title input field", () => {
    expect(screen.getByLabelText("Task Title"));
    expect(screen.findByRole("input", { name: "Task Title" }));
  });

  // TODO: Step 7
  it("disables the submit button if required fields are not filled", () => {
    //userEvent.type(screen.getByLabelText("Task Title"), "");
    userEvent.click(screen.getByLabelText("Task Title"));

    expect(screen.getByText("Submit")).toBeDisabled();
  });
  // TODO: Step 8
  it("enables submit button if required fields are provided", () => {
    const titleInput = screen.getByLabelText("Task Title") as HTMLInputElement;

    userEvent.type(titleInput, "Test Title");

    expect(titleInput.value).toEqual("Test Title");
    expect(screen.getByText("Submit")).not.toBeDisabled();
  });

  // TODO: Step 9
  it("calls onSubmit with the proper input values when Submit is clicked", () => {
    const titleInput = screen.getByLabelText("Task Title") as HTMLInputElement;

    userEvent.type(titleInput, "Test Title");
    userEvent.click(screen.getByText("Submit"));

    expect(mockOnClick).toHaveBeenCalledWith({
      title: "Test Title",
      date: new Date(new Date().toDateString())
    });
  });

  // TODO: Step 10
  it("clears the task title field when submit is clicked", () => {
    const titleInput = screen.getByLabelText("Task Title") as HTMLInputElement;

    userEvent.type(titleInput, "Test Title");

    userEvent.click(screen.getByText("Submit"));

    expect(titleInput.value).toEqual("");
  });

  // TODO: Step 11
  it("calls onCancel when 'Cancel' button is clicked", () => {
    userEvent.click(screen.getByText("Cancel"));

    waitFor(() => expect(mockOnCancel).toHaveBeenCalled());
  });

  describe("Keyboard Shortcuts", () => {
    // TODO: Step 17
    it("clears the task title field when user submits using the enter key", () => {
      const titleInput = screen.getByLabelText(
        "Task Title"
      ) as HTMLInputElement;

      userEvent.type(titleInput, "Test Title");

      userEvent.type(titleInput, "{enter}");

      expect(titleInput.value).toEqual("");
    });

    // TODO: Step 18
    it("displays an error message if user presses Enter while required fields are empty", () => {
      userEvent.type(screen.getByLabelText("Task Title"), "{enter}");

      expect(screen.getByText("Please enter a title."));
    });

    // TODO: Step 19
    it("calls onCancel when user presses Escape", async () => {
      userEvent.type(screen.getByLabelText("Task Title"), "{escape}");

      await waitFor(() => expect(mockOnCancel).toHaveBeenCalled());
    });
  });
});
