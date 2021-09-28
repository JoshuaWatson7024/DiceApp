import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it("has the roll button when the application loads", () => {
    const element = screen.getByText("Roll Dice");
    expect(element).toBeInTheDocument();
  })

  it("shows the dice when you roll", async () => {
    const button = screen.getByText("Roll Dice");
    button.click();
    const d1 = await screen.getByTestId("diceimg1");
    const d2 = screen.getByTestId("diceimg2");
    expect(d1).toBeInTheDocument();
    expect(d2).toBeInTheDocument();
  });
  });


