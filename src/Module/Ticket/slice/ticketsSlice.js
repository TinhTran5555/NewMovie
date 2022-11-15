import { createSlice } from "@reduxjs/toolkit";
import movieAPIs from "../../../App/Api/movieAPIs/movieAPIs";
import thunk from "../../../App/Api/Helpper/thunk"
const initialState = {
  tickets: [],
  selectedTicket: [],

  isLoading: false,
  error: null,

};
const {
  getTicketDetails,
  postTicket
} = movieAPIs;


export const getTicketDetailsThunk = thunk.request(
  "tickets/getTickets",
  getTicketDetails
);
export const postTicketThunk = thunk.request(
  "tickets/postTickets",
  postTicket
);
const selectTicketHandler = (state = initialState, { payload }) => {
  
 
  const index = state.selectedTicket.findIndex(
    (item) => 
    item.maGhe === payload.maGhe
  );

    

  if (index === -1) {
    const newSelectedTicket = [...state.selectedTicket, payload ];
    
    return { ...state, selectedTicket: newSelectedTicket };
  }
  const newSelectedTicket = state.selectedTicket.filter(
    (item) => 
    item.maGhe !== payload.maGhe
    
  );
  

  return { ...state, selectedTicket: newSelectedTicket };
};

const removeAllTicketHandler = (state) => {
  state.selectedTicket.length = 0;
};
const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    selectTicketAction: selectTicketHandler,
    removeAllTicketsAction: removeAllTicketHandler,
  },
  extraReducers: (builder) => {
    builder.addCase(getTicketDetailsThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTicketDetailsThunk.fulfilled, (state, { payload }) => {
      state.tickets = payload;
      state.isLoading = false;
      
    });
    builder.addCase(getTicketDetailsThunk.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    });
   
  },
});

export const { selectTicketAction, removeAllTicketsAction } =
ticketsSlice.actions;
export default ticketsSlice.reducer;
