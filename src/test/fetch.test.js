import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, waitForElement } from "@testing-library/react";
// note: khodesh az dakhele pooshe __mocks__ , file axios ro peyda mikone
import axiosMock from "axios";
import FetchComponent from "./Fetch";

afterEach(cleanup);

it("render data", async () => {
     // ye meghdare dara fake behesh midim
     axiosMock.get.mockResolvedValue({ data: "hello" });
     // url ham mitone fake bashe
     const url = "anything.ir";

     const { getByTestId } = render(<FetchComponent url={url} />);
     expect(getByTestId("loading")).toHaveTextContent("...loading");
    //  montazere hhtp request elementi bemoon ke data-testid=resolve dare
     const resolveSpan = await waitForElement(() => getByTestId("resolved"));
     //  vaghti ke data gerefte shod entezar darim ke meghdaresh hello bash
     expect(resolveSpan).toHaveTextContent("hello");
     //  chon useEffect ba taghiir props.url component ro render mikone pas yebar bayad farakhani beshe
     expect(axiosMock.get).toHaveBeenCalledTimes(1);
     // moshakhas mikonim ke ba url bayad farakhani beshe
     expect(axiosMock.get).toHaveBeenCalledWith(url);
});
