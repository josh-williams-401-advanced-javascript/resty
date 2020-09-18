import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, waitFor, screen, getByRole, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../App.js'

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

describe('resty tests', () => {
  it('renders the header', () => {
    const { getByText } = render(<App />);
    const header = getByText(/resty/i);
    expect(header).toBeInTheDocument();
  });
  
  it('loads and displays names', async () => {
  
    render(<App />);
    screen.getByText('RESTy')
    const urlInput = screen.getByPlaceholderText('http://');
    fireEvent.change(urlInput, {event:{target: 'https://swapi.dev/api/people/'}})
    fireEvent.click(screen.getByText('Go'));
    screen.debug();
  
  })
  it('loads the home page', async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('homelink'));
    expect(screen.getByRole('button')).toHaveTextContent('Go')
  })
  
  it('loads the history page', async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('historylink'));
    const header = screen.getAllByRole('heading');
    expect(header[1]).toHaveTextContent('History');
  })
  
  it('loads the help page', async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('helplink'));
    const header = screen.getAllByRole('heading');
    expect(header[1]).toHaveTextContent('Help')
  })
  it('loads page with GET button checked', async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('homelink'));
    const radio = screen.getAllByRole('radio');
    expect(radio[0].checked).toBe(true);
    expect(radio[1].checked).toBe(false);
  
  })
})
