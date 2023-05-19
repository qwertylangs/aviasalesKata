import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ITicket } from "@src/types"

import { getTickets } from "./tickets-actions"

export type TicketsSlice = {
  tickets: ITicket[]
  status: "idle" | "loading" | "receivedAll" | "receivedFirstPart" | "rejected"
  error: string | null
}

const initialState: TicketsSlice = {
  tickets: [],
  status: "idle",
  error: null,
}

const ticketsSlice = createSlice({
  name: "@@tickets",
  initialState,
  reducers: {
    receivedFirstPart: (state, action: PayloadAction<ITicket[]>) => {
      state.tickets = action.payload
      state.status = "receivedFirstPart"
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTickets.pending, (state) => {
      state.error = null
      state.status = "loading"
    })
    builder.addCase(getTickets.rejected, (state, action) => {
      state.status = "rejected"
      state.error = action.payload ? action.payload : "Error"
    })
    builder.addCase(getTickets.fulfilled, (state, action) => {
      state.status = "receivedAll"
      state.tickets = state.tickets.concat(action.payload)
    })
  },
})

export default ticketsSlice.reducer
export const { receivedFirstPart } = ticketsSlice.actions
