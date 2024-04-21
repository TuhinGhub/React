/**
 * 6.Create a React component (Modal) that displays a modal dialog with content.
 * Users can open and close the modal. Write tests to check if the modal opens and closes when triggered.
 */
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Ques6 from "./Ques6";

test("Check If Everything working", () => {
  render(<Ques6 />);
  const open = screen.getByText("Open modal");
  expect(open).toBeInTheDocument();
  fireEvent.click(open);
  const close = screen.getByText("Close modal");
  expect(close).toBeInTheDocument();
  fireEvent.click(close);
  expect(screen.queryByText("This is Modal")).not.toBeInTheDocument();
});