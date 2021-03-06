import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { delay } from './Utilities/Helpers';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it("has the roll button when the application loads", () => {
    const element = screen.getByText("Roll Dice");
    expect(element).toBeInTheDocument();
  })

  it("has the data table", async () => {
    const element = screen.getByTestId("data");
    expect(element).toBeInTheDocument();
  })

});


