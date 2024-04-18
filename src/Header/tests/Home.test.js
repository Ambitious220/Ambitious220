// Home.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
// import Home from './Home';
import Home from '../Components/Home'; 



describe('Home component', () => {
  it('renders welcome message and quote', () => {
    render(<Home />);
    
    const welcomeHeader = screen.getByText('SHOPPING TIME..!!');
    const welcomePara = screen.getByText('"Each day is a page in your fashion story. Find your fashion fix."');

    expect(welcomeHeader).toBeInTheDocument();
    expect(welcomePara).toBeInTheDocument();
  });

  it('renders carousel with correct images and captions', () => {
    render(<Home />);
    
    const carouselImages = screen.getAllByRole('img');
    const carouselCaptions = screen.getAllByRole('caption');

    // Assuming there are 4 carousel items
    expect(carouselImages).toHaveLength(4);
    expect(carouselCaptions).toHaveLength(4);

    // You can add more specific assertions based on your needs
    // For example, checking specific captions or image sources
    // Make sure to adjust these based on your actual component content
    expect(screen.getByText('"You can have anything you want in life if you dress for it."')).toBeInTheDocument();
    expect(screen.getByText('"Clothes mean nothing until someone lives in them."')).toBeInTheDocument();
    expect(screen.getByText('"I don\'t know who invented high heels, but all women owe him a lot!"')).toBeInTheDocument();
    expect(screen.getByText('"Style is a way to say who you are without having to speak."')).toBeInTheDocument();
  });

  // You can add more test cases to cover other scenarios, such as user interactions with the carousel.
});
