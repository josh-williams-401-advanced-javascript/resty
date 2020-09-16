import React from 'react'

// eslint-disable-next-line no-unused-vars
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import Results from '../components/results';

it('renders learn react link', () => {
  const { getByText } = render(<App />);
  const header = getByText(/resty/i);
  expect(header).toBeInTheDocument();
});

it('will not render results section before there are results', async () =>{
  const { container } = render(<Results data={''} resultsIn={null}/>);
  expect(container).toBeEmpty();
})

it('should render json data when data is passed to results', () => {
  const people = {
    'Luke Skywalker': 'http://swapi.dev/api/people/1/',
    'Darth Vader': 'http://swapi.dev/api/people/4/',
  }
  const { getByText } = render(<Results data={people} resultsIn={'results'}/>);
  const newHeading = screen.getByRole('heading');
  const luke = getByText('Luke Skywalker');
  const darthUrl = getByText('http://swapi.dev/api/people/4/');
  expect(newHeading).toHaveTextContent('Results');
  expect(luke).toBeInTheDocument();
  expect(darthUrl).toBeInTheDocument();
});


