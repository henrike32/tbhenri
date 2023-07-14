import SignUp from "../pages/SignUp";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("<SignUp />", () => {
  it("asks for email, password, and confirmation ", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );

    const form = screen.getByText(/email: password: password:/i);
    expect(form).toBeInTheDocument();
  });
  it("has a submit button", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );

    const form = screen.getByRole("button", { name: /submit/i });
    expect(form).toBeInTheDocument();
  });
  it("redirects to another page", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );

    const form = screen.getByRole("link", { name: /login/i });
    expect(form).toBeInTheDocument();
  });
});
