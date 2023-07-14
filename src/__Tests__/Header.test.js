import Header from "../components/Header";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'

describe('<Header />', () => {
  it('has a an image', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    const picture = screen.getByAltText(/logo/i)
    expect(picture).toBeInTheDocument()
  })

  it('renders text for header', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    const headText = screen.getByText(/tbh apartments/i)
    expect(headText).toBeInTheDocument()
  })

  it("has a clickable logo link", () => {
    render(<Header />);
    const logoLink = screen.getByRole("link", { name: /logo/i });
    expect(logoLink).toHaveAttribute("href", "/");
  });
})