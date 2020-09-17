import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, waitFor, screen, getByRole, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../App.js'
import Results from '../components/results';

// Option 2
const server = setupServer(
  rest.get('*', (req, res, ctx) => {
    return res(ctx.json({
      results: [
        { name: 'foo' },
        { name: 'bar' }
      ]
    }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it('renders the header', () => {
  const { getByText } = render(<App />);
  const header = getByText(/resty/i);
  expect(header).toBeInTheDocument();
});

it('loads and displays names', async () => {

    render(<App />);

    // screen.debug();

    screen.getByText('RESTy')

  const urlInput = screen.getByPlaceholderText('http://');
  fireEvent.change(urlInput, {event:{target: 'https://swapi.dev/api/people/'}})

  // screen.getAllByRole('complementary');

  fireEvent.click(screen.getByText('Go'));

//   await screen.getByAltText('loading');

    screen.debug();

})

it('will not render results section before there are results', async () =>{
  const { container } = render(<Results data={''} resultsIn={null}/>);
  expect(container).toBeEmpty();
})