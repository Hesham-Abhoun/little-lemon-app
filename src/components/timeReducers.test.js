import { initializeTimes, updateTimes } from './timeReducers';

// Mock the fetchAPI function
jest.mock('https://raw.githubusercontent.com/courseraap/capstone/main/api.js', () => ({
  fetchAPI: jest.fn(),
}));

const { fetchAPI } = require('https://raw.githubusercontent.com/courseraap/capstone/main/api.js');

describe('timeReducers', () => {
  beforeEach(() => {
    // Reset mock before each test
    fetchAPI.mockReset();
  });

  test('initializeTimes returns the expected available times for today', () => {
    const mockTimes = ['10:00 AM', '11:00 AM', '12:00 PM'];
    fetchAPI.mockReturnValue(mockTimes);

    const availableTimes = initializeTimes();
    expect(availableTimes).toEqual(mockTimes);
    expect(fetchAPI).toHaveBeenCalledTimes(1);
  });

  test('updateTimes returns the same value that is provided in the state', () => {
    const mockTimes = ['10:00 AM', '11:00 AM', '12:00 PM'];
    fetchAPI.mockReturnValue(mockTimes);

    const date = '2024-07-25';
    const state = [];
    const action = { type: 'UPDATE_TIMES', date };

    const newState = updateTimes(state, action);
    expect(newState).toEqual(mockTimes);
    expect(fetchAPI).toHaveBeenCalledWith(date);
    expect(fetchAPI).toHaveBeenCalledTimes(1);
  });
});