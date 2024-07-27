import React,{useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import "./BookingForm.css";
const BookingForm = ({
  availableTimes,
  tableState,
  setTableState,
  handleDateChange,
  handleTimeChange,
  handleGuestsChange,
  handleOccasionChange,
  date,
  time,guests,occasion,
  navigateTo


}) => {


  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmed")
  };
  useEffect(() => {
    // Check if the form is valid
    const isDateValid = date !== '';
    const isTimeValid = time !== '';
    const isGuestsValid = guests >= 1 && guests <= 10;
    const isOccasionValid = occasion !== '';
    setIsFormValid(isDateValid && isTimeValid && isGuestsValid && isOccasionValid);
  }, [date, time, guests, occasion,isFormValid]);


  return (
   <section>
     <h1>Booking Now</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date"  required  value={date} onChange={handleDateChange} />
        <label htmlFor="res-time" >Choose time</label>
        <select id="res-time" required    value={time} onChange={handleTimeChange} >
          {availableTimes?.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests"   required value={guests} onChange={handleGuestsChange} />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion"  required value={occasion} onChange={handleOccasionChange}>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" disabled={!isFormValid} aria-label="On Click" />
      </form>
   </section>
  );
};

export default BookingForm;
