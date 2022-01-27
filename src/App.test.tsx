import * as React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  // TODO: Step 1
  it("renders correctly", () => {
    expect(screen.getByText("Task Tracker"));
  });

  describe("AddTaskModal", () => {
    // TODO: Step 12
    it.skip("hides the `Add Task` button when 'Add Task' is clicked", () => {
      userEvent.click(screen.getByText("Add Task"));

      expect(screen.queryByText("Add Task")).not.toBeInTheDocument();
    });

    // TODO: Step 13
    it("opens the TaskModal when 'Add Task' is clicked", () => {
      userEvent.click(screen.getByText("Add Task"));

      expect(screen.queryByText("Task Title")).toBeInTheDocument();
    });

    // TODO: Step 14
    it("closes the modal and reveals the `Add Task` button when task is submitted", () => {
      userEvent.click(screen.getByText("Add Task"));
      userEvent.type(screen.getByLabelText("Task Title"), "Test Title");
      userEvent.click(screen.getByText("Submit"));

      expect(screen.queryByText("Task Title")).not.toBeInTheDocument();
      expect(screen.queryByText("Add Task")).toBeInTheDocument();
    });
  });

  describe("Happy path integration test", () => {
    // TODO: Step 15
    it("should successfully add tasks to the list", async () => {
      userEvent.click(screen.getByText("Add Task"));
      userEvent.type(screen.getByLabelText("Task Title"), "AddedTask1");
      userEvent.click(screen.getByText("Submit"));

      await waitFor(() => {
        expect(screen.getByText("AddedTask1")).toBeInTheDocument();
      });
    });

    // TODO: Step 16
    it.skip("should successfully delete the correct task from the list", async () => {
      userEvent.click(screen.getByText("Add Task"));
      userEvent.type(screen.getByLabelText("Task Title"), "AddedTask1");
      userEvent.click(screen.getByText("Submit"));
      userEvent.click(screen.getByText("Add Task"));
      userEvent.type(screen.getByLabelText("Task Title"), "AddedTask2");
      userEvent.click(screen.getByText("Submit"));
      userEvent.click(screen.getByText("Add Task"));
      userEvent.type(screen.getByLabelText("Task Title"), "AddedTask3");
      userEvent.click(screen.getByText("Submit"));

      expect(await screen.findByText("AddedTask1"));
      expect(await screen.findByText("AddedTask2"));
      expect(await screen.findByText("AddedTask3"));

      const addedTask2Button = (
        await screen.findAllByText("Delete")
      )[1] as HTMLButtonElement;

      userEvent.click(addedTask2Button);

      expect(await screen.findByText("AddedTask1")).toBeInTheDocument();
      expect(await screen.findByText("AddedTask3")).toBeInTheDocument();
      expect(await screen.queryByText("AddedTask2")).not.toBeInTheDocument();
    });
  });
});
