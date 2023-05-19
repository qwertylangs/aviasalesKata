import { RootState } from "@src/store"

export const selectFilterTransfers = (state: RootState) => state.controls.filterTransfers
export const selectFilterAvailability = (state: RootState) => state.controls.sortAvailability
