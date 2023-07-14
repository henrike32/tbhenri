import Home from "../pages/Home";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'

describe( '<Home />', () => {
  it( 'has a an image', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    const picture = screen.getByAltText( /apartment image/i )
    expect( picture ).toBeInTheDocument()
  })
  it( 'renders text for picture title', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    const picText = screen.getByText( /find your new home/i )
    expect( picText ).toBeInTheDocument()
  })
})