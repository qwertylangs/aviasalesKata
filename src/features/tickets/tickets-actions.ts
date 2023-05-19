import { createAsyncThunk } from "@reduxjs/toolkit"
import { Extra, ITicket, TicketsResponce } from "@src/types"
import { AxiosResponse } from "axios"

import { TicketsSlice, receivedFirstPart } from "./tickets-slice"

export const getTickets = createAsyncThunk<
  ITicket[],
  undefined,
  { extra: Extra; state: { tickets: TicketsSlice }; rejectValue: string }
>(
  "@@tickets/getAllTickets",
  async (_, { extra: { api, client }, rejectWithValue, dispatch }) => {
    try {
      const {
        data: { searchId },
      } = await client.get(api.searchIdUrl)

      const allTickets: ITicket[] = []
      let qtyAttemps = 0
      let qtyErrors = 0

      const tryFetchTickets = async () => {
        try {
          const { data } = (await client.get(api.getTicketsUrl(searchId))) as AxiosResponse<TicketsResponce>
          const tickets = data.tickets
          console.log("запрос")
          qtyErrors = 0
          qtyAttemps++

          allTickets.push(...tickets)

          if (qtyAttemps === 1) {
            dispatch(receivedFirstPart(tickets))
          }

          if (!data.stop) {
            await tryFetchTickets()
          }
        } catch (error) {
          qtyErrors++
          if (qtyErrors < 3) {
            await tryFetchTickets()
          }
        }
      }
      await tryFetchTickets()
      return allTickets
    } catch (error) {
      return rejectWithValue("Cannot get tickets")
    }
  },
  {
    condition(_, { getState }) {
      const { tickets } = getState()
      return tickets.status === "idle"
    },
  }
)
