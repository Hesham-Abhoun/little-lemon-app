
import BookingForm from './BookingForm';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';


test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText(/Booking Now/i);
    expect(headingElement).toBeInTheDocument();
})


const availableTimes = ['10:00 AM', '11:00 AM', '12:00 PM'];

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: Router });
};

describe('BookingForm', () => {
  test('Form is initially invalid and submit button is disabled', () => {
    renderWithRouter(<BookingForm availableTimes={availableTimes} onDateChange={jest.fn()} />);

    const submitButton = screen.getByText('Make Your reservation');
    expect(submitButton).toBeDisabled();
  });

  test('Form is valid when all fields are filled out correctly and submit button is enabled', () => {
    renderWithRouter(<BookingForm availableTimes={availableTimes} onDateChange={jest.fn()} />);

    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2024-07-25' } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '10:00 AM' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: 4 } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });

    const submitButton = screen.getByText('Make Your reservation');
    expect(submitButton).not.toBeDisabled();
  });

  test('Form is invalid if any field is missing or invalid', () => {
    renderWithRouter(<BookingForm availableTimes={availableTimes} onDateChange={jest.fn()} />);
    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '10:00 AM' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: 4 } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });
    const submitButton = screen.getByText('Make Your reservation');

    // Initially, the form is invalid
    expect(submitButton).toBeDisabled();

    // Fill out only some fields
    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2024-07-25' } });
    // The form is still invalid because the occasion is missing
    expect(submitButton).toBeDisabled();

    // Fill out the remaining field
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

    // Now the form is valid
    expect(submitButton).not.toBeDisabled();
  });
});
