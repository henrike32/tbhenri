import AptIndex from "../pages/AptIndex";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("<AptIndex />", () => {
  it("has a heading", () => {
    render(
      <BrowserRouter>
        <AptIndex />
      </BrowserRouter>
    );
    const unit = screen.getByRole("heading", {
      name: /apartment list/i,
    });
    expect(unit).toBeInTheDocument();
  });
  it("renders a street name", () => {
    render(
      <BrowserRouter>
        <AptIndex />
      </BrowserRouter>
    );
    const stName = screen.getByRole("heading", { name: /415 rainbow street/i });
    expect(stName).toBeInTheDocument();
  });
});
