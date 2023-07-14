import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import NotFound from "../pages/NotFound"

describe( "<NotFound />", () => {
  it( "renders without crashing", () => {
    render( 
      <BrowserRouter>
        <NotFound />
      </BrowserRouter> 
    )
    const errorpage = screen.getByAltText( /404 not found/i )
    expect( errorpage ).toBeInTheDocument()
    })

  it( 'it has a text for heading', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    const errorhead = screen.getByRole( 'heading', {name: /e r r o r/i })
    expect ( errorhead ).toBeInTheDocument()
  })
})