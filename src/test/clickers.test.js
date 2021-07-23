import "@testing-library/jest-dom/extend-expect";
import { act, cleanup, fireEvent, render } from "@testing-library/react";
import Clickers from "./Clickers";

afterEach(cleanup);
jest.useFakeTimers();

describe("<Clickers/>", () => {
     it("renderSnapshotClickers", () => {
          const { getByTestId } = render(<Clickers />);
          expect(getByTestId("count")).toHaveTextContent("0");
     });

     it("increment", () => {
          const { getByTestId, getByText } = render(<Clickers />);
          fireEvent.click(getByText("up"));
          expect(getByTestId("count")).toHaveTextContent("1");
     });
     // note: chon setTimeout darim pas bayad as async await estefade konim
     it("decrement", async() => {
          const { getByTestId, getByText } = render(<Clickers />);
          fireEvent.click(getByText("down"));
          // new: time inja bayad bishtar bashe
          act(() => jest.advanceTimersByTime(510));
          expect(getByTestId("count")).toBe("-1");
     });
});
