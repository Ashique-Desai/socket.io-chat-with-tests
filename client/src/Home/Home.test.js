import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import Home from './Home.jsx'
import { MemoryRouter } from 'react-router-dom'


// import {  MemoryRouter, Link } from "react-router-dom";


describe('Home Component', () => {
    test('renders element with input textbox', () => {
        render(
            <MemoryRouter>
                <Home/>
            </MemoryRouter>
        )
        const textField = screen.getByRole('textbox')
        expect(textField).toBeInTheDocument()
    })
    test('renders place holder text' , () => {
        render(
            <MemoryRouter>
                <Home/>
            </MemoryRouter>
        )
        const placeHolder = screen.getByPlaceholderText('Room')
        expect(placeHolder).toBeInTheDocument()
    })
   
})

describe('Input element - Interactions', () => {
    test('Input change', async () =>  {
        render(<input />)
        
        fireEvent.change(screen.getByRole('textbox'), {
            target: { value: 'Java' },
        })
       expect(await screen.findByDisplayValue(/Java/)).toBeInTheDocument()
    })
    
})





















// TEST FROM CREATE_REACT_APP:
// test('renders learn react link', () => {
//     render(<App />);
//     const linkElement = screen.getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
//   });
  