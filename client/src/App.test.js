import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import App from './App'
import ChatRoom from './ChatRoom/ChatRoom.jsx'
import Home from './Home/Home.jsx'
import userEvent from '@testing-library/user-event'
import {  MemoryRouter, Link } from "react-router-dom";

describe('App', () => {
  test('lands on a home route: /', () => {
    render(<App />)
  
    expect(screen.getByTestId('route-home')).toHaveAttribute('href', '/');
  })

  test('Home page has Join room button', () => {
    render(<App />)
  
    expect(screen.getByText(/Join room/i)).toBeInTheDocument()
  })
})


describe('Join Room button', () => {
    test('joins the entered room', async () => {
      render(<App />)
      fireEvent.change(screen.getByRole('textbox'), {
            target: { value: 'Python'},
          })
      userEvent.click(screen.getByRole('link'))
      screen.debug()
      render(
      <MemoryRouter>
         <Home />
      </MemoryRouter>
     )
      await expect(screen.getByTestId('route-home')).toBeInTheDocument()
      await expect(screen.getByTestId('chat-room')).toHaveTextContent('Python') 
     
      // await expect(screen.getByText(/Room:/i)).toHaveAttribute({roomId:'Python'})
      // screen.debug()
    })
    
})
