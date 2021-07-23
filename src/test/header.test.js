import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";
import Header from "./Header";

afterEach(cleanup);

it("renderSnapshotHeader", () => {
     const { asFragment } = render(<Header text='hello' />);
     expect(asFragment()).toMatchSnapshot();
});

it("renders", () => {
     const { getByTestId, getByText } = render(<Header text='hello' />);
     expect(getByTestId("h1tag")).toHaveTextContent("hello");
     expect(getByText("hello")).toHaveClass("h1-class");
});

it("render button", () => {
     const { getByTestId } = render(<Header text='hello' />);
     expect(getByTestId("ok-button")).toHaveAttribute("disabled");
     expect(getByTestId("ok-button")).toHaveAttribute("type", "submit");
});
