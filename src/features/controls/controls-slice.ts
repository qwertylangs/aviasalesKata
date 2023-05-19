import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AvailabilityOption } from "@src/types/availabilityOptions"
import { TransferOption } from "@src/types/transfersOptions"

type ControlsSlice = {
  filterTransfers: TransferOption[]
  sortAvailability: AvailabilityOption
}
const initialState: ControlsSlice = {
  filterTransfers: [
    TransferOption.OneTransfer,
    TransferOption.TwoTransfers,
    TransferOption.ThreeTransfers,
    TransferOption.WithoutTransfers,
  ],
  sortAvailability: AvailabilityOption.Cheapest,
}

const controlsSlice = createSlice({
  name: "@@controls",
  initialState,
  reducers: {
    setFilterTransfers: (state, action: PayloadAction<TransferOption[]>) => {
      state.filterTransfers = action.payload
    },
    setSortAvailability: (state, action: PayloadAction<AvailabilityOption>) => {
      state.sortAvailability = action.payload
    },
  },
})

const { reducer } = controlsSlice
export default reducer

export const { setFilterTransfers, setSortAvailability } = controlsSlice.actions
