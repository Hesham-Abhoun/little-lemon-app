import React, { useState, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import BookingForm from "./components/BookingForm";
import ConfirmedBooking from "./components/ConfirmedBooking";




import { BrowserRouter , Routes, Route } from "react-router-dom";
import "./App.css";

const initializeTimes = () => {
  return ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"];
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // For now, return the same available times regardless of the date
      return [
        '10:00 AM',
        '11:00 AM',
        '12:00 PM',
        '1:00 PM',
        '2:00 PM',
        '3:00 PM',
      ];
    default:
      return state;
  }
};
function App() {
  const [tableState, setTableState] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "birthday",
  });
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
 
  const handleDateChange = (e) => {
    const selecedDate = e.target.value;
    setTableState({ ...tableState, date: selecedDate });
    onChangeDate(selecedDate);
  };

  const onChangeDate = (date) => {
    dispatch({ type: "UPDATE_TIMES", date });
  };
  const handleTimeChange = (e) => {
    setTableState({ ...tableState, time: e.target.value });
  };
  const handleGuestsChange = (e) => {
    setTableState({ ...tableState, guests: Number(e.target.value)});
  };
  const handleOccasionChange = (e) => {
    setTableState({ ...tableState, occasion: e.target.value });
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route
            path="/reservations"
            element={
              <BookingForm
                handleDateChange={handleDateChange}
                handleTimeChange={handleTimeChange}
                handleGuestsChange={handleGuestsChange}
                handleOccasionChange={handleOccasionChange}
                availableTimes={availableTimes}
                {...tableState}
               
              />
            }
          />
           <Route path="/confirmed" element={<ConfirmedBooking />} />
          <Route path="*" element={<h1>Not Found 404</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
