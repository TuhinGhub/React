import { fireEvent, render, screen } from "@testing-library/react";
import Ques3 from "../Ques3";
import React from "react";
import '@testing-library/jest-dom/extend-expect'; // Import extend-expect to use custom matchers

describe("Ques 3 Component test", () => {
  test("Ques 3 should be visible", () => {
    render(<Ques3 />);

    const incrementButton = screen.getByText("Increment"); // Use getByText to get a single element
    const decrementButton = screen.getByText("Decrement"); // Use getByText to get a single element

    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);

    // Assert the count value after increment and decrement actions
    expect(screen.getByText("0")).toBeInTheDocument(); // Assuming initial count is 0
  });
});
