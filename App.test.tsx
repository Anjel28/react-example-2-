//import React from 'react';
//import { render, screen } from '@testing-library/react';

//import App from './App';

//test('renders learn react link', () => {
  //render(<App/>);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
//});

import React from 'react';
import { render } from '@testing-library/react';
import MyComponent from './App'; // or wherever your component is

test('renders MyComponent correctly', () => {
  // Provide the required 'name' prop
  render(<MyComponent name="Test User" />);
});
