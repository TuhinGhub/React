import { fireEvent, render, screen } from "@testing-library/react";
import LoginForm from "../LoginForm";

describe("LoginForm Component", () => {
  test("renders login form", () => {
    render(<LoginForm />);
    
    // Check if username and password inputs are rendered
    expect(screen.getByLabelText("Username:")).toBeInTheDocument();
    expect(screen.getByLabelText("Password:")).toBeInTheDocument();
  });

  test("inputs capture user input correctly", () => {
    render(<LoginForm />);

    // Type into the username input field
    fireEvent.change(screen.getByLabelText("Username:"), {
      target: { value: "testuser" },
    });

    // Type into the password input field
    fireEvent.change(screen.getByLabelText("Password:"), {
      target: { value: "testpassword" },
    });

    // Check if the input values are captured correctly
    expect(screen.getByLabelText("Username:")).toHaveValue("testuser");
    expect(screen.getByLabelText("Password:")).toHaveValue("testpassword");
  });

  test("submit button triggers form submission", () => {
    render(<LoginForm />);

    // Mock console.log to avoid error in test output
    const originalConsoleLog = console.log;
    console.log = jest.fn();

    // Trigger form submission by clicking the submit button
    fireEvent.click(screen.getByText("Submit"));

    // Restore original console.log
    console.log = originalConsoleLog;

    // Check if form submission is logged correctly
    expect(console.log).toHaveBeenCalledWith("Form Submitted", "", "");
  });

  test("form submission throws error if condition is met", () => {
    render(<LoginForm />);

    // Mock console.error to avoid error in test output
    const originalConsoleError = console.error;
    console.error = jest.fn();

    // Mock the value of 'i' to trigger the error condition
    const originalValue = global.Number;
    global.Number = { i: 9 };

    // Trigger form submission by clicking the submit button
    fireEvent.click(screen.getByText("Submit"));

    // Restore original console.error
    console.error = originalConsoleError;
    // Restore original value of 'i'
    global.Number = originalValue;

    // Check if the error is logged correctly
    expect(console.error).toHaveBeenCalledWith(new Error("Crashed"));
  });
});
