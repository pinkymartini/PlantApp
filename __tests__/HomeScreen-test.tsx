
import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react-native';
import React from 'react';
import { Provider } from 'react-redux';
import HomeScreen from '../app/(tabs)/index';


const mockStore = configureStore({
  reducer: {
    session: (state = { hasProPlan: false }) => state,
    
  },
});

test('Text renders correctly on HomeScreen', () => {
  render(
    <Provider store={mockStore}>
      <HomeScreen />
    </Provider>
  );
});