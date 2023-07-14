import Login from "../pages/Login";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("<Login />", () => {
  it("asks for email and password", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const form = screen.getByText(/email: password:/i);
    expect(form).toBeInTheDocument();
  });

  it("has a login button", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const form = screen.getByRole("button", { name: /login/i });
    expect(form).toBeInTheDocument();
  });

  it("redirects to another page", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const form = screen.getByRole("link", { name: /signup/i });
    expect(form).toBeInTheDocument();
  });
});
