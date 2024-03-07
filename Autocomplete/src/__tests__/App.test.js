import { act, fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import fetchMock from "jest-fetch-mock";

describe("App Component", () => {
  beforeEach(() => {
    fetchMock.resetMocks(); // Reset mocks before each test
  });

  it("displays data from API", async () => {
    
    act(() => {
      fetchMock.mockResponseOnce(
        JSON.stringify({
          products: [
            {
              id: 1,
              title: "test Product",
              images: [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png",
              ],
            },
          ],
        })
      );
    });
    render(<App />);
  });
});
