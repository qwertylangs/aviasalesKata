import { configureStore } from "@reduxjs/toolkit"
import axios from "axios"
import { useDispatch } from "react-redux"
import * as api from "@src/config"
import controlsReducer from "@features/controls/controls-slice"
import ticketsReducer from "@features/tickets/tickets-slice"

export const store = configureStore({
  reducer: { controls: controlsReducer, tickets: ticketsReducer },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
