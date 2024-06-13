import { render } from "@testing-library/react";
import TopTodo from "./TopTodo";

it("returns null when todos list is empty", function () {
  const result = render(<TopTodo todos={[]} />);
  expect(result.queryByText("priority")).not.toBeInTheDocument();
});