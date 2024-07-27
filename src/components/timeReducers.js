import { fetchAPI } from 'https://raw.githubusercontent.com/courseraap/capstone/main/api.js';

// Helper function to format date as YYYY-MM-DD
const formatDate = (date) => {
  const d = new Date(date);
  const month = `${d.getMonth() + 1}`.padStart(2, '0');
  const day = `${d.getDate()}`.padStart(2, '0');
  const year = d.getFullYear();
  return `${year}-${month}-${day}`;
};

export const initializeTimes = () => {
  const today = new Date();
  const formattedToday = formatDate(today);
  return fetchAPI(formattedToday);
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(action.date);
    default:
      return state;
  }
};