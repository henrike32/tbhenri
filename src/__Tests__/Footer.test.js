import Footer from "../components/Footer";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'

describe('<Has a page that renders without crashing />', () => {
  it('renders text for footer', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    const footerText = screen.getByText(/tucker/i)
    expect(footerText).toBeInTheDocument()
  })
})

export default Footer