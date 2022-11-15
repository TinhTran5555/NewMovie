import { configureStore } from '@reduxjs/toolkit';

import ticketsSlice from '../Module/Ticket/slice/ticketsSlice';
import authSlice from '../Module/Auth/Slices/authSlice';
export const store = configureStore({
  reducer: {
      listTicket: ticketsSlice,
    auth: authSlice,
    
  },
});

export const ticketSelector = (state) => state.listTicket;

export const authSelector = (state) => state.auth;